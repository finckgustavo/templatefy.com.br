import { Template } from '@/types';
import { generateStyles } from './styles';
import { generateScripts } from './scripts';

export const quizTemplate: Template = {
  id: 'image-quiz',
  name: 'Quiz com imagens',
  description: 'Template para criar quizzes interativos com imagens',
  fields: [
    {
      id: 'brandName',
      label: 'Nome da Marca',
      type: 'text',
      description: 'Nome da empresa ou marca'
    },
    {
      id: 'logoUrl',
      label: 'URL do Logo',
      type: 'url',
      description: 'URL do logotipo da marca'
    },
    {
      id: 'quizTitle',
      label: 'Título do Quiz',
      type: 'text',
      description: 'Título que aparece no topo do quiz'
    },
    {
      id: 'primaryColor',
      label: 'Cor Principal',
      type: 'color',
      description: 'Cor principal do tema'
    },
    {
      id: 'backgroundColor',
      label: 'Cor do Fundo',
      type: 'color',
      description: 'Cor do fundo da página'
    },
    {
      id: 'menuColor',
      label: 'Cor do Menu',
      type: 'color',
      description: 'Cor do menu superior'
    },
    {
      id: 'boxColor',
      label: 'Cor da Box',
      type: 'color',
      description: 'Cor do fundo das perguntas'
    },
    ...Array.from({ length: 5 }, (_, i) => [
      {
        id: `question${i + 1}`,
        label: `Pergunta ${i + 1}`,
        type: 'text',
        description: `Texto da pergunta ${i + 1}`
      },
      {
        id: `question${i + 1}Image`,
        label: `Imagem da Pergunta ${i + 1}`,
        type: 'url',
        description: `URL da imagem para a pergunta ${i + 1}`
      },
      ...Array.from({ length: 4 }, (_, j) => ({
        id: `question${i + 1}option${j + 1}`,
        label: `Opção ${j + 1} da Pergunta ${i + 1}`,
        type: 'text',
        description: `Texto da opção ${j + 1} da pergunta ${i + 1}`
      }))
    ]).flat(),
    {
      id: 'redirectUrl',
      label: 'URL de Redirecionamento',
      type: 'url',
      description: 'URL para onde o usuário será redirecionado após completar o quiz'
    }
  ],
  defaultValues: {
    brandName: 'Sua Marca',
    logoUrl: 'https://placehold.co/200x100/FF9900/FFFFFF/png?text=QUIZ',
    quizTitle: 'Quiz Interativo',
    primaryColor: '#FF9900',
    backgroundColor: '#FFFFFF',
    menuColor: '#FFFFFF',
    boxColor: '#F0F0F0',
    question1: 'Qual é sua cor favorita?',
    question1Image: 'https://placehold.co/600x300/FF9900/FFFFFF/png?text=Pergunta+1',
    question1option1: 'Azul',
    question1option2: 'Verde',
    question1option3: 'Vermelho',
    question1option4: 'Amarelo',
    question2: 'Qual estação do ano você mais gosta?',
    question2Image: 'https://placehold.co/600x300/FF9900/FFFFFF/png?text=Pergunta+2',
    question2option1: 'Primavera',
    question2option2: 'Verão',
    question2option3: 'Outono',
    question2option4: 'Inverno',
    question3: 'Qual seu hobby favorito?',
    question3Image: 'https://placehold.co/600x300/FF9900/FFFFFF/png?text=Pergunta+3',
    question3option1: 'Leitura',
    question3option2: 'Esportes',
    question3option3: 'Música',
    question3option4: 'Viagens',
    question4: 'Qual seu tipo de filme preferido?',
    question4Image: 'https://placehold.co/600x300/FF9900/FFFFFF/png?text=Pergunta+4',
    question4option1: 'Ação',
    question4option2: 'Comédia',
    question4option3: 'Drama',
    question4option4: 'Ficção Científica',
    question5: 'Como você prefere passar seu tempo livre?',
    question5Image: 'https://placehold.co/600x300/FF9900/FFFFFF/png?text=Pergunta+5',
    question5option1: 'Com amigos',
    question5option2: 'Em casa',
    question5option3: 'Ao ar livre',
    question5option4: 'Praticando hobbies',
    redirectUrl: 'https://exemplo.com/resultado'
  },
  generate: async (data) => {
    // Ensure image paths are relative to template root
    const logoUrl = data.logoUrl?.startsWith('http') 
      ? data.logoUrl 
      : `${data.logoUrl}`;

    // Get only questions that have content
    const questions = Array.from({ length: 5 }, (_, i) => {
      const number = i + 1;
      const text = data[`question${number}`];
      const image = data[`question${number}Image`];
      const options = Array.from({ length: 4 }, (_, j) => 
        data[`question${number}option${j + 1}`]
      );
      
      // Only include questions that have text or image and at least one option
      if ((text || image) && options.some(Boolean)) {
        return {
          number,
          text,
          image,
          options
        };
      }
      return null;
    }).filter(Boolean);

    // Ensure we have at least one question
    if (questions.length === 0) {
      questions.push({
        number: 1,
        text: "Exemplo de pergunta",
        image: "https://placehold.co/600x300/FF9900/FFFFFF/png?text=Pergunta+1",
        options: ["Opção 1", "Opção 2", "Opção 3", "Opção 4"]
      });
    }

    return `<!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${data.brandName} - Quiz</title>
        <style>${generateStyles({
          primaryColor: data.primaryColor,
          backgroundColor: data.backgroundColor,
          menuColor: data.menuColor,
          boxColor: data.boxColor
        })}</style>
    </head>
    <body>
        <nav class="navbar">
            <img src="${logoUrl}" alt="${data.brandName}" class="logo">
            <span style="color: white; font-size: 24px;">☰</span>
        </nav>

        <div class="pergunta">
            <div style="padding-bottom: 20px;"></div>

            <div class="respondaeganhe">
                <p>${data.quizTitle}</p>
            </div>

            <div class="container">
                <div class="progress-bar-container">
                    <div class="progress-bar">
                        <div class="progress" id="progress"></div>
                    </div>
                    <div class="progress-text" id="progress-text">20%</div>
                </div>
            </div>

            <div class="question-container">
                ${questions.map((q, i) => `
                    <div id="p${q.number}" ${i === 0 ? 'class="active"' : ''}>
                        <img src="${q.image}" style="width: 90%; display: flex; margin: 0 auto; border-radius: 15px;">
                        <p class="pergunta_title">${q.text}</p>
                        <ul class="quiz-options">
                            ${q.options.map(option => `
                                <li><button>${option}</button></li>
                            `).join('')}
                        </ul>
                    </div>
                `).join('')}
            </div>

            <div style="padding-bottom: 15px;"></div>
            <button class="next-button" id="next-button">Próximo</button>
            <div style="padding-bottom: 5px;"></div>
        </div>

        <script>${generateScripts(data.redirectUrl)}</script>
    </body>
    </html>`;
  }
};