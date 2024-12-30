import { generateNotificationStyles } from './styles/notifications';

export const generateStyles = (data: Record<string, string>) => `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Sora', sans-serif;
  -webkit-tap-highlight-color: transparent;
}

body {
  min-height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 460px;
  margin: 0 auto;
}

.wheel-container {
  position: relative;
  width: 100%;
  max-width: 460px;
  aspect-ratio: 1;
  transition: transform 0.3s;
}

.wheel-img {
  width: 100%;
  height: 100%;
  transition: transform 5s cubic-bezier(0.17, 0.67, 0.12, 0.99);
}

.center-img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 22%;
  height: 20%;
  margin-left: 1%;
  cursor: pointer;
  z-index: 10;
  aspect-ratio: 1 / 1;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.08); }
  100% { transform: scale(1); }
}

.button-container {
  margin-top: -20px;
  text-align: center;
}

.button {
  background: #fff;
  padding: 8px 28px;
  border-radius: 20px;
  font-weight: 600;
  font-size: 18px;
  color: #000;
  cursor: pointer;
  white-space: nowrap;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border: none;
  animation: pulse 1s linear infinite;
}

.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  transition: 0.3s;
  z-index: 100;
}

.popup.active {
  opacity: 1;
  visibility: visible;
}

.popup-content {
  background: #fff;
  width: 90%;
  max-width: 480px;
  text-align: center;
  padding: 40px 20px;
  border-radius: 20px;
  position: relative;
  transform: scale(0.6);
  transition: 0.3s;
}

.popup.active .popup-content {
  transform: scale(1);
}

.popup-emoji {
  font-size: 60px;
  margin-bottom: 15px;
}

.popup-title {
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 15px;
}

.popup-desc {
  font-size: 16px;
  color: #636363;
  margin-bottom: 20px;
}

.popup-button {
  display: inline-block;
  background: #000;
  color: #fff;
  padding: 14px 24px;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
}

${generateNotificationStyles(data)}`;