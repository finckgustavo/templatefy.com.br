import { Template } from '@/types';

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
    redirectUrl: '/resultado'
  },
  generate: (data) => {
    const questions = Array.from({ length: 5 }, (_, i) => ({
      number: i + 1,
      text: data[`question${i + 1}`],
      image: data[`question${i + 1}Image`],
      options: Array.from({ length: 4 }, (_, j) => data[`question${i + 1}option${j + 1}`])
    }));

    return `<!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${data.brandName} - Quiz</title>
        <style>
            :root {
              --primary-color: ${data.primaryColor};
              --background-color: ${data.backgroundColor};
              --menu-color: ${data.menuColor};
              --box-color: ${data.boxColor};
            }
            
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: Arial, Helvetica, sans-serif;
            }
            
            body {
                background-color: var(--background-color);
            }
            
            .navbar {
                display: flex;
                justify-content: space-between;
                align-items: center;
                background: var(--menu-color);
                padding: 15px 10px;
                margin-bottom: 5px;
            }
            
            .logo {
                height: 30px;
            }
            
            .pergunta {
                display: block;
                margin: 0 auto;
                background-color: var(--box-color);
                width: 93%;
                border-radius: 15px;
                margin-top: 0px;
            }
            
            .respondaeganhe {
                width: 90%;
                display: flex;
                margin: 0 auto;
                height: 35px;
                background-color: var(--primary-color);
                margin-bottom: 35px;
                border-radius: 10px;
                color: white;
                justify-content: center;
                align-items: center;
                font-size: 20px;
            }
            
            .container {
                text-align: center;
                width: 90%;
                margin: 0 auto;
                display: block;
                padding-top: 10px;
                margin-top: -30px;
            }
            
            .progress-bar-container {
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                margin-bottom: 10px;
            }
            
            .progress-bar {
                background-color: #e0e0e0;
                border-radius: 20px;
                width: 80%;
                height: 15px;
                position: relative;
            }
            
            .progress {
                background-color: var(--primary-color);
                height: 100%;
                border-radius: 20px;
                width: 0%;
                transition: width 0.5s ease-in-out;
            }
            
            .progress-text {
                font-size: 20px;
                width: 20%;
                text-align: right;
                color: var(--primary-color);
            }
            
            .quiz-options {
                list-style: none;
                padding: 0;
                display: flex;
                flex-wrap: wrap;
                margin-left: 5%;
                margin-right: 5%;
                justify-content: space-between;
                gap: 10px;
            }
            
            .quiz-options li {
                flex: 1 1 calc(50% - 10px);
                display: flex;
                justify-content: center;
            }
            
            .quiz-options button {
                width: 100%;
                padding: 10px;
                font-size: 16px;
                border: 2px solid #ccc;
                border-radius: 25px;
                background-color: var(--box-color);
                color: #555;
                cursor: pointer;
                transition: all 0.3s;
            }
            
            .quiz-options button:hover {
                border-color: var(--primary-color);
                color: var(--primary-color);
            }
            
            .pergunta_title {
                margin-left: 5%;
                margin-right: 5%;
                padding-top: 15px;
                text-align: center;
                font-size: 20px;
                padding-bottom: 10px;
            }
            
            .next-button {
                padding: 10px 20px;
                width: 90%;
                display: block;
                margin: 0 auto;
                font-size: 18px;
                background-color: var(--primary-color);
                color: white;
                border: none;
                border-radius: 15px;
                cursor: pointer;
                font-weight: bold;
                margin-bottom: 20px;
            }
            
            .next-button:disabled {
                background-color: #ccc;
                cursor: not-allowed;
            }
            
            .question-container > div {
                display: none;
            }
            
            .question-container > div.active {
                display: block;
            }
        </style>
    </head>
    <body>
        <nav class="navbar">
            <img src="${data.logoUrl}" alt="${data.brandName}" class="logo">
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

        <script>
            let currentQuestion = 1;
            const totalQuestions = 5;
            const redirectUrl = '${data.redirectUrl}';
            
            function updateProgress() {
                const progressPercentage = (currentQuestion / totalQuestions) * 100;
                document.getElementById('progress').style.width = progressPercentage + '%';
                document.getElementById('progress-text').textContent = Math.round(progressPercentage) + '%';
            }
            
            function nextQuestion() {
                if (currentQuestion < totalQuestions) {
                    document.getElementById('p' + currentQuestion).classList.remove('active');
                    currentQuestion++;
                    document.getElementById('p' + currentQuestion).classList.add('active');
                    updateProgress();
                    
                    if (currentQuestion === totalQuestions) {
                        document.getElementById('next-button').textContent = 'Finalizar';
                    }
                } else {
                    window.location.href = redirectUrl;
                }
            }
            
            document.querySelectorAll('.quiz-options button').forEach(button => {
                button.addEventListener('click', () => {
                    const currentOptions = button.closest('.question-container > div').querySelectorAll('button');
                    currentOptions.forEach(btn => {
                        btn.style.borderColor = '#ccc';
                        btn.style.backgroundColor = 'var(--box-color)';
                    });
                    button.style.borderColor = 'var(--primary-color)';
                    button.style.backgroundColor = '#fff8e7';
                    document.getElementById('next-button').disabled = false;
                });
            });
            
            document.getElementById('next-button').addEventListener('click', nextQuestion);
            
            updateProgress();
        </script>
    </body>
    </html>`;
  }
};