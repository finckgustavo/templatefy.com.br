import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Store, Package, Download, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { Modal } from '../../ui/Modal';
import { ConfirmationModal } from '../../ui/ConfirmationModal';
import { Button } from '../../ui/Button';
import { StoreSettings } from './StoreSettings';
import { ProductList } from './ProductList';
import { ProductEditor } from './ProductEditor';
import { Template } from '@/types';
import { downloadTemplate } from '@/lib/utils/download';

interface StoreEditorStepsProps {
  values: Record<string, string>;
  onChange: (field: string, value: string) => void;
  currentStep: number;
  onNextStep: () => void;
  onPrevStep: () => void;
  template: Template;
}

const steps = [
  { title: 'Configurações da Loja', icon: Store },
  { title: 'Produtos', icon: Package },
  { title: 'Finalização', icon: Download }
];

export function StoreEditorSteps({ 
  values, 
  onChange, 
  currentStep, 
  onNextStep, 
  onPrevStep,
  template 
}: StoreEditorStepsProps) {
  const [isDownloading, setIsDownloading] = useState(false);
  const [hasDownloaded, setHasDownloaded] = useState(false);
  const [showLimitModal, setShowLimitModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState<any>(null);
  const showNavigation = !editingProduct;
  
  const products = JSON.parse(values.products || '[]');
  const currentStepData = steps[currentStep];
  const isLastStep = currentStep === steps.length - 1;

  const handleDownload = async () => {
    if (hasDownloaded) {
      setShowConfirmModal(true);
      return;
    }
    
    setIsDownloading(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('Usuário não autenticado');
      
      await downloadTemplate(template, values, user.id, () => setShowLimitModal(true));
      setHasDownloaded(true);
    } catch (error) {
      alert(error instanceof Error ? error.message : 'Erro ao baixar template');
    } finally {
      setIsDownloading(false);
    }
  };

  const handleAddProduct = () => {
    setEditingProduct({
      id: Date.now(),
      name: '',
      description: '',
      price: 0,
      discountPrice: 0,
      stock: 0,
      images: [''],
      specs: {},
      buyUrl: ''
    });
  };

  const handleEditProduct = (productId: number) => {
    const product = products.find((p: any) => p.id === productId);
    if (product) {
      setEditingProduct(product);
    }
  };

  const handleDeleteProduct = (productId: number) => {
    const newProducts = products.filter((p: any) => p.id !== productId);
    onChange('products', JSON.stringify(newProducts));
  };

  const handleSaveProduct = (product: any) => {
    const newProducts = [...products];
    const index = newProducts.findIndex((p: any) => p.id === product.id);
    
    if (index >= 0) {
      newProducts[index] = product;
    } else {
      newProducts.push(product);
    }
    
    onChange('products', JSON.stringify(newProducts));
    setEditingProduct(null);
  };

  const renderStepContent = () => {
    if (editingProduct) {
      return (
        <ProductEditor
          product={editingProduct}
          onSave={handleSaveProduct}
          onCancel={() => setEditingProduct(null)}
        />
      );
    }

    switch (currentStep) {
      case 0:
        return <StoreSettings values={values} onChange={onChange} templateId={template.id} />;
      case 1:
        return (
          <ProductList
            products={products}
            onEdit={handleEditProduct}
            onDelete={handleDeleteProduct}
            onAdd={handleAddProduct}
            isRedirectUrl
          />
        );
      case 2:
        return null;
      default:
        return null;
    }
  };

  return (
    <>
    <div className="h-full flex flex-col">
      <div className="flex-1 overflow-auto p-6">
        {!editingProduct && <div className="flex items-center space-x-3 mb-6">
          <div className="p-2 bg-indigo-100 rounded-lg">
            {React.createElement(currentStepData.icon, { 
              className: 'h-5 w-5 text-indigo-600' 
            })}
          </div>
          <h3 className="text-lg font-medium text-gray-900">
            {currentStepData.title}
          </h3>
        </div>}
        
        {renderStepContent()}
      </div>

      {showNavigation && (
        <div className="flex justify-between p-4 bg-gray-50 border-t">
          <Button
            onClick={onPrevStep}
            variant="outline"
            disabled={currentStep === 0}
            className="flex items-center space-x-2"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Anterior</span>
          </Button>

          {isLastStep ? (
            <div className="flex gap-3">
              <Button
                onClick={handleDownload}
                variant="primary"
                disabled={isDownloading}
                className="flex items-center space-x-2 min-w-[140px]"
              >
                {isDownloading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Baixando...</span>
                  </>
                ) : (
                  <>
                    <Download className="h-4 w-4" />
                    <span>Finalizar</span>
                  </>
                )}
              </Button>
            </div>
          ) : (
            <Button
              onClick={onNextStep}
              variant="primary"
              className="flex items-center space-x-2"
            >
              <span>Próximo</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          )}
        </div>
      )}
    </div>

    <Modal
      isOpen={showLimitModal}
      onClose={() => setShowLimitModal(false)}
      title="Limite de Downloads Atingido"
      description="Você atingiu o seu limite atual de downloads. Entre em contato conosco para aumentar seu limite."
    >
      <button
        onClick={() => setShowLimitModal(false)}
        className="w-full mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
      >
        Entendi
      </button>
    </Modal>
    <ConfirmationModal
      isOpen={showConfirmModal}
      onClose={() => setShowConfirmModal(false)}
      onConfirm={async () => {
        setShowConfirmModal(false);
        setIsDownloading(true);
        try {
          const { data: { user } } = await supabase.auth.getUser();
          if (!user) throw new Error('Usuário não autenticado');
          
          await downloadTemplate(template, values, user.id, () => setShowLimitModal(true));
        } catch (error) {
          alert(error instanceof Error ? error.message : 'Erro ao baixar template');
        } finally {
          setIsDownloading(false);
        }
      }}
      title="Confirmar Download"
      description="Você tem certeza que deseja baixar novamente? Isso custará mais 1 token."
      confirmText="Baixar novamente"
    />
    </>
  );
}