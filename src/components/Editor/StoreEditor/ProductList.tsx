import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { Button } from '../../ui/Button';
import { Card } from '../../ui/Card';

interface Product {
  id: number;
  name: string;
  images: string[];
  price: number;
  discountPrice: number;
  stock: number;
}

interface ProductListProps {
  products: Product[];
  onEdit: (productId: number) => void;
  onDelete: (productId: number) => void;
  onAdd: () => void;
}

export function ProductList({ products, onEdit, onDelete, onAdd }: ProductListProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-gray-900">Produtos</h3>
        <Button 
          onClick={onAdd}
          variant="outline"
          className="flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          <span>Adicionar Produto</span>
        </Button>
      </div>

      <div className="grid gap-4">
        {products.map((product) => (
          <Card key={product.id} className="p-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                <img 
                  src={product.images[0]} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-gray-900 truncate">
                  {product.name}
                </h4>
                <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">
                  <span className="line-through">
                    R$ {product.price.toFixed(2)}
                  </span>
                  <span className="font-medium text-indigo-600">
                    R$ {product.discountPrice.toFixed(2)}
                  </span>
                  <span className="text-gray-400">•</span>
                  <span>
                    {product.stock} unidades
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  onClick={() => onEdit(product.id)}
                >
                  Editar
                </Button>
                <Button
                  variant="outline"
                  onClick={() => onDelete(product.id)}
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}