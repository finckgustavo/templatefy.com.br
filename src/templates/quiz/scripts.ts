export const generateScripts = (redirectUrl: string) => `
let currentQuestion = 1;
const totalQuestions = document.querySelectorAll('.question-container > div').length;
const redirectUrl = '${redirectUrl}';

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

updateProgress();`;