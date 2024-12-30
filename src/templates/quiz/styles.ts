export const generateStyles = (colors: {
  primaryColor: string;
  backgroundColor: string;
  menuColor: string;
  boxColor: string;
}) => `
:root {
  --primary-color: ${colors.primaryColor};
  --background-color: ${colors.backgroundColor};
  --menu-color: ${colors.menuColor};
  --box-color: ${colors.boxColor};
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
}`;