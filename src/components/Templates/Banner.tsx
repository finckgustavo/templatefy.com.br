import React from 'react';
import { Boxes } from 'lucide-react';

export function Banner() {
  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-900">
      <div className="relative z-10 flex items-center">
        {/* Content */}
        <div className="flex-1 px-8 py-12 lg:px-12">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <Boxes className="w-5 h-5 text-indigo-200" />
              <span className="text-indigo-200 font-medium">Crie experiências únicas</span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-sora font-bold text-white mb-4">
              Potencialize seus resultados com templates profissionais
            </h1>
            
            <p className="text-base sm:text-lg text-indigo-100">
              Escolha, personalize e publique templates otimizados para maximizar suas conversões e engajamento
            </p>
          </div>
        </div>

        {/* Illustration */}
        <div className="hidden lg:block relative flex-1 h-full">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              {/* Grid Pattern */}
              <div className="absolute inset-0 grid grid-cols-6 gap-3 transform rotate-12 opacity-20">
                {Array.from({ length: 24 }).map((_, i) => (
                  <div key={i} className="h-12 rounded-lg bg-white" />
                ))}
              </div>
              
              {/* Floating Elements */}
              <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-indigo-400/30 rounded-lg backdrop-blur-xl animate-float" />
                <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-indigo-300/20 rounded-lg backdrop-blur-xl animate-float-delayed" />
                <div className="absolute bottom-1/3 right-1/4 w-16 h-16 bg-indigo-200/20 rounded-lg backdrop-blur-xl animate-float" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] rounded-full bg-gradient-to-b from-indigo-400/20 to-transparent blur-3xl" />
      <div className="absolute left-0 bottom-0 translate-y-1/2 -translate-x-1/3 w-[600px] h-[600px] rounded-full bg-gradient-to-t from-indigo-500/20 to-transparent blur-3xl" />
    </div>
  );
}