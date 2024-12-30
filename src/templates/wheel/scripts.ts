import { generateNotificationScripts } from './scripts/notifications';

export const generateScripts = (data: Record<string, string>) => `
const wheel = document.querySelector('.wheel-img');
const button = document.querySelector('.button');
const popup = document.querySelector('.popup');

let canSpin = true;
let spinCount = 0;

function showPopup(config) {
  popup.querySelector('.popup-emoji').textContent = config.emoji;
  popup.querySelector('.popup-title').textContent = config.title;
  popup.querySelector('.popup-desc').textContent = config.description;
  popup.querySelector('.popup-button').textContent = config.buttonText;
  popup.classList.add('active');
}

function hidePopup() {
  popup.classList.remove('active');
  if (spinCount === 1) {
    canSpin = true;
  }
}

function spin() {
  if (!canSpin) return;
  
  canSpin = false;
  spinCount++;
  
  // Calculate rotation
  const currentRotation = wheel.style.transform ? 
    parseInt(wheel.style.transform.replace(/[^0-9]/g, '')) : 0;
  
  const baseSpins = 5 * 360; // 5 full rotations
  let targetAngle;
  
  if (spinCount === 1) {
    // First spin: Land on "Tente outra vez" (270 degrees)
    targetAngle = baseSpins + 270 - (currentRotation % 360);
  } else {
    // Second spin: Land on "100%" (90 degrees)
    targetAngle = baseSpins + 90 - (currentRotation % 360);
  }
  
  wheel.style.transform = \`rotate(\${currentRotation + targetAngle}deg)\`;
  
  // Show popup after wheel stops
  setTimeout(() => {
    if (spinCount === 1) {
      showPopup({
        emoji: '${data.failureEmoji}',
        title: '${data.tryAgainTitle}',
        description: '${data.tryAgainDescription}',
        buttonText: '${data.tryAgainButtonText}'
      });
    } else {
      showPopup({
        emoji: '${data.successEmoji}',
        title: '${data.popupTitle}',
        description: '${data.popupDescription}',
        buttonText: '${data.popupButtonText}'
      });
      
      // Add redirect for winning popup
      popup.querySelector('.popup-button').addEventListener('click', () => {
        window.location.href = '${data.redirectUrl}';
      });
    }
  }, 5000);
}

// Event Listeners
button.addEventListener('click', spin);

popup.addEventListener('click', (e) => {
  if (e.target === popup || e.target.classList.contains('popup-button')) {
    hidePopup();
  }
});

// Prevent wheel image dragging
wheel.addEventListener('dragstart', (e) => e.preventDefault());

${generateNotificationScripts(data)}`;