import React, { useState } from 'react';
import { Header } from './components/Layout/Header';
import { TemplateGrid } from './components/Templates/TemplateGrid';
import { QuizEditorSteps } from './components/Editor/QuizEditorSteps';
import { WheelEditorSteps } from './components/Editor/WheelEditor/WheelEditorSteps';
import { StoreEditorSteps } from './components/Editor/StoreEditor/StoreEditorSteps';
import { NewsEditorSteps } from './components/Editor/NewsEditor/NewsEditorSteps';
import { AuthForm } from './components/auth/AuthForm';
import { supabase } from './lib/supabase';
import { Template } from './types';
import { templates } from './templates';
import { AccountSettings } from './components/Settings/AccountSettings';
import { EditorPreview } from './components/Editor/EditorPreview';
import { AdminPanel } from './components/Admin/AdminPanel';

export function App() {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [templateValues, setTemplateValues] = useState<Record<string, string>>({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const [showAdmin, setShowAdmin] = useState<boolean>(false);
  const [user, setUser] = useState<any>(null);

  React.useEffect(() => {
    // Check current auth status
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsAuthenticated(!!session);
      setUser(session?.user || null);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthenticated(!!session);
      setUser(session?.user || null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleAuthSuccess = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
      setIsAuthenticated(true);
      setUser(session.user);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  const handleSelectTemplate = (template: Template) => {
    setSelectedTemplate(template);
    setTemplateValues(template.defaultValues);
    setCurrentStep(0);
  };

  const handleLogoClick = () => {
    setSelectedTemplate(null);
    setCurrentStep(0);
    setShowSettings(false);
  };

  const handleValueChange = (fieldId: string, value: string) => {
    setTemplateValues(prev => ({
      ...prev,
      [fieldId]: value
    }));
  };

  const handleNextStep = () => {
    if (currentStep < 6) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const renderEditor = () => {
    if (!selectedTemplate) return null;

    switch (selectedTemplate.id) {
      case 'image-quiz':
        return (
          <QuizEditorSteps
            fields={selectedTemplate.fields}
            values={templateValues}
            onChange={handleValueChange}
            currentStep={currentStep}
            onNextStep={handleNextStep}
            onPrevStep={handlePrevStep}
            template={selectedTemplate}
          />
        );
      case 'wheel':
        return (
          <WheelEditorSteps
            values={templateValues}
            onChange={handleValueChange}
            currentStep={currentStep}
            onNextStep={handleNextStep}
            onPrevStep={handlePrevStep}
            template={selectedTemplate}
          />
        );
      case 'store':
        return (
          <StoreEditorSteps
            values={templateValues}
            onChange={handleValueChange}
            currentStep={currentStep}
            onNextStep={handleNextStep}
            onPrevStep={handlePrevStep}
            template={selectedTemplate}
          />
        );
      case 'news':
        return (
          <NewsEditorSteps
            values={templateValues}
            onChange={handleValueChange}
            currentStep={currentStep}
            onNextStep={handleNextStep}
            onPrevStep={handlePrevStep}
            template={selectedTemplate}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {isAuthenticated && (
        <Header 
          isAuthenticated={isAuthenticated}
          onLogout={handleLogout}
          onOpenSettings={() => setShowSettings(true)}
          onOpenAdmin={() => setShowAdmin(true)}
          templateName={selectedTemplate?.name}
          onLogoClick={handleLogoClick}
        />
      )}
      
      <main className={`flex-1 overflow-hidden flex items-center justify-center ${!isAuthenticated ? 'h-screen' : ''}`}>
        {!isAuthenticated ? (
          <AuthForm onSuccess={handleAuthSuccess} />
        ) : !selectedTemplate ? (
          <div className="h-full w-full">
            {showSettings ? <AccountSettings onClose={() => setShowSettings(false)} /> : 
             showAdmin ? <AdminPanel onClose={() => setShowAdmin(false)} /> : (
              <div className="h-full w-full max-w-[1600px] mx-auto p-6 overflow-auto">
                <TemplateGrid
                  templates={templates}
                  onSelectTemplate={handleSelectTemplate}
                />
              </div>
            )}
          </div>
        ) : (
          <div className="h-full w-full max-w-[1600px] mx-auto p-6 flex gap-6">
            <div className="flex-1 flex flex-col h-full">
              <div className="bg-gray-100 p-2 text-center text-sm font-medium text-gray-600 border-b rounded-t-lg">
                Editor do Template
              </div>
              <div className="flex-1 bg-white rounded-b-lg border border-gray-200 shadow-sm overflow-hidden">
                {renderEditor()}
              </div>
            </div>

            <div className="w-[400px] flex-shrink-0 flex flex-col h-full">
              <div className="bg-gray-100 p-2 text-center text-sm font-medium text-gray-600 border-b rounded-t-lg">
                Preview do Template
              </div>
              <div className="flex-1 bg-white rounded-b-lg border border-gray-200 shadow-sm overflow-hidden">
                <EditorPreview
                  template={selectedTemplate}
                  values={templateValues}
                />
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;