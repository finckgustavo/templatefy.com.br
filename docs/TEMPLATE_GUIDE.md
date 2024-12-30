# Guia de Formatação de Templates

Este guia explica como transformar um arquivo HTML monolítico em um template utilizável no nosso projeto.

## 1. Estrutura do Template

Todo template deve ser dividido em 3 partes principais:
- Campos configuráveis (fields)
- Valores padrão (defaultValues)
- Função geradora (generate)

## 2. Identificando Campos Configuráveis

### 2.1 Tipos de Campos Suportados
```typescript
type FieldType = 'text' | 'textarea' | 'color' | 'url';
```

### 2.2 Estrutura do Campo
```typescript
interface TemplateField {
  id: string;        // Identificador único
  label: string;     // Label visível para o usuário
  type: FieldType;   // Tipo do campo
  description?: string; // Descrição opcional
}
```

### 2.3 Exemplo de Definição
```typescript
const fields = [
  {
    id: 'brandName',
    label: 'Nome da Marca',
    type: 'text',
    description: 'Nome da empresa ou marca'
  },
  {
    id: 'primaryColor',
    label: 'Cor Principal',
    type: 'color',
    description: 'Cor principal do tema'
  }
];
```

## 3. Separando os Estilos

### 3.1 Extraia todos os estilos do `<style>`
- Mova para uma função `generateStyles`
- Substitua valores fixos por variáveis
- Use template strings para interpolação

```typescript
function generateStyles(colors: {
  primaryColor: string;
  backgroundColor: string;
}) {
  return `
    :root {
      --primary-color: ${colors.primaryColor};
      --background-color: ${colors.backgroundColor};
    }
    /* ... resto dos estilos ... */
  `;
}
```

## 4. Separando os Scripts

### 4.1 Extraia todo o JavaScript do `<script>`
- Mova para uma função `generateScripts`
- Substitua valores fixos por variáveis
- Use template strings para interpolação

```typescript
function generateScripts(config: {
  redirectUrl: string;
}) {
  return `
    let currentStep = 1;
    const redirectUrl = '${config.redirectUrl}';
    /* ... resto do script ... */
  `;
}
```

## 5. Criando a Função Generate

### 5.1 Estrutura Básica
```typescript
function generate(data: Record<string, string>) {
  return `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${data.brandName}</title>
      <style>${generateStyles({
        primaryColor: data.primaryColor,
        backgroundColor: data.backgroundColor
      })}</style>
    </head>
    <body>
      <!-- Conteúdo HTML com interpolação de variáveis -->
      ${generateContent(data)}
      <script>${generateScripts({
        redirectUrl: data.redirectUrl
      })}</script>
    </body>
    </html>
  `;
}
```

## 6. Exportando o Template

### 6.1 Estrutura Final
```typescript
export const myTemplate: Template = {
  id: 'template-id',
  name: 'Nome do Template',
  description: 'Descrição do template',
  fields: [/* campos configuráveis */],
  defaultValues: {/* valores padrão */},
  generate: (data) => {/* função geradora */}
};
```

## 7. Boas Práticas

### 7.1 Organização de Arquivos
```
templates/
  └── meu-template/
      ├── index.ts     # Exporta o template
      ├── styles.ts    # Função generateStyles
      ├── scripts.ts   # Função generateScripts
      └── template.ts  # Definição do template
```

### 7.2 Validações
- Sempre forneça valores padrão para todos os campos
- Valide tipos de dados antes de usar
- Use fallbacks para imagens e cores

### 7.3 Performance
- Minimize o uso de imagens externas
- Otimize o CSS e JavaScript
- Use lazy loading quando possível

## 8. Checklist Final

- [ ] Identificou todos os campos configuráveis
- [ ] Separou estilos em função própria
- [ ] Separou scripts em função própria
- [ ] Criou valores padrão para todos os campos
- [ ] Testou a geração do template
- [ ] Validou a responsividade
- [ ] Documentou campos e funcionalidades