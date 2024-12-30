import { Template } from '@/types';
import { generateStyles } from './styles';
import { generateScripts } from './scripts';
import { notificationFields } from './features/notifications';
import { imagePathManager } from '@/lib/utils/image-paths';

export const wheelTemplate: Template = {
  id: 'wheel',
  name: 'Roleta Premiada',
  description: 'Template de roleta da sorte com prêmios personalizáveis',
  fields: [
    {
      id: 'brandName',
      label: 'Nome da Marca',
      type: 'text',
      description: 'Nome da empresa ou marca'
    },
    {
      id: 'useBackgroundColor',
      label: 'Usar Cor de Fundo',
      type: 'text',
      description: 'Se true, usa cor sólida ao invés de imagem'
    },
    {
      id: 'backgroundColor',
      label: 'Cor do Fundo',
      type: 'color',
      description: 'Cor de fundo quando não usar imagem'
    },
    {
      id: 'backgroundImage',
      label: 'Imagem de Fundo',
      type: 'url',
      description: 'URL da imagem de fundo'
    },
    {
      id: 'wheelImage',
      label: 'Imagem da Roleta',
      type: 'url',
      description: 'URL da imagem da roleta'
    },
    {
      id: 'centerImage',
      label: 'Imagem Central',
      type: 'url',
      description: 'URL da imagem central da roleta'
    },
    {
      id: 'buttonText',
      label: 'Texto do Botão',
      type: 'text',
      description: 'Texto do botão de girar'
    },
    {
      id: 'buttonColor',
      label: 'Cor do Botão',
      type: 'color',
      description: 'Cor de fundo do botão'
    },
    {
      id: 'buttonTextColor',
      label: 'Cor do Texto do Botão',
      type: 'color',
      description: 'Cor do texto do botão'
    },
    {
      id: 'failureEmoji',
      label: 'Emoji de Falha',
      type: 'text',
      description: 'Emoji exibido no popup de falha'
    },
    {
      id: 'tryAgainTitle',
      label: 'Título do Popup de Falha',
      type: 'text',
      description: 'Título exibido quando o usuário não ganhar'
    },
    {
      id: 'tryAgainDescription',
      label: 'Descrição do Popup de Falha',
      type: 'textarea',
      description: 'Descrição exibida quando o usuário não ganhar'
    },
    {
      id: 'tryAgainButtonText',
      label: 'Texto do Botão de Falha',
      type: 'text',
      description: 'Texto do botão quando o usuário não ganhar'
    },
    {
      id: 'successEmoji',
      label: 'Emoji de Sucesso',
      type: 'text',
      description: 'Emoji exibido no popup de vitória'
    },
    {
      id: 'popupTitle',
      label: 'Título do Popup de Vitória',
      type: 'text',
      description: 'Título exibido quando o usuário ganhar'
    },
    {
      id: 'popupDescription',
      label: 'Descrição do Popup de Vitória',
      type: 'textarea',
      description: 'Descrição exibida quando o usuário ganhar'
    },
    {
      id: 'popupButtonText',
      label: 'Texto do Botão de Vitória',
      type: 'text',
      description: 'Texto do botão quando o usuário ganhar'
    },
    {
      id: 'redirectUrl',
      label: 'URL de Redirecionamento',
      type: 'url',
      description: 'URL para onde o usuário será redirecionado após ganhar'
    },
    ...notificationFields
  ],
  defaultValues: {
    brandName: 'Sua Marca',
    useBackgroundColor: 'false',
    backgroundColor: '#000000',
    backgroundImage: 'https://placehold.co/1080x1920/000000/000000/png',
    wheelImage: 'https://i.ibb.co/kxmYpTB/roleta.png',
    centerImage: 'https://i.ibb.co/BCLRBBM/centro.png',
    buttonText: 'GIRAR ROLETA',
    buttonColor: '#FFFFFF',
    buttonTextColor: '#000000',
    failureEmoji: '😢',
    tryAgainTitle: 'Não foi dessa vez!',
    tryAgainDescription: 'Mas não desanime, você tem mais uma chance de ganhar!',
    tryAgainButtonText: 'TENTAR NOVAMENTE',
    successEmoji: '🎉',
    popupTitle: 'Parabéns! Você Ganhou!',
    popupDescription: 'Clique no botão abaixo para resgatar seu prêmio!',
    popupButtonText: 'RESGATAR PRÊMIO',
    redirectUrl: 'https://exemplo.com/resgate',
    showNotifications: 'true',
    notificationBgColor: '#FFFFFF',
    notificationTextColor: '#000000',
    discountValues: '10,20,30,40,50',
    notificationMinInterval: '2',
    notificationMaxInterval: '5',
    notificationTemplate: '{name} acabou de ganhar {discount}% de desconto!'
  },
  generate: async (data) => {
    // Get image paths based on context (preview vs download)
    const wheelImage = data.wheelImage?.startsWith('blob:') || data.wheelImage?.startsWith('http')
      ? data.wheelImage
      : 'images/wheel.png';
      
    const centerImage = data.centerImage?.startsWith('blob:') || data.centerImage?.startsWith('http')
      ? data.centerImage
      : 'images/center.png';
      
    const backgroundImage = data.backgroundImage?.startsWith('blob:') || data.backgroundImage?.startsWith('http')
      ? data.backgroundImage
      : 'images/background.png';

    const useBackgroundColor = data.useBackgroundColor === 'true';
    const backgroundStyle = useBackgroundColor
      ? `background-color: ${data.backgroundColor};`
      : `background-image: url('${backgroundImage}');`;

    return `<!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${data.brandName} - Roleta Premiada</title>
        <link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&display=swap" rel="stylesheet">
        <style>${generateStyles(data)}</style>
    </head>
    <body style="${backgroundStyle}">
        <div class="main-container">
            <div class="wheel-container">
                <img src="${wheelImage}" alt="Roleta" class="wheel-img">
                <img src="${centerImage}" alt="Girar" class="center-img">
            </div>

            <div class="button-container">
                <button class="button" style="background: ${data.buttonColor}; color: ${data.buttonTextColor}">
                    ${data.buttonText}
                </button>
            </div>
        </div>

        <div class="popup">
            <div class="popup-content">
                <div class="popup-emoji"></div>
                <div class="popup-title"></div>
                <div class="popup-desc"></div>
                <div class="popup-button"></div>
            </div>
        </div>

        <div class="notification"></div>

        <script>${generateScripts(data)}</script>
    </body>
    </html>`;
  }
};