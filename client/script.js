import bot from 'assets/bot.svg';
import user from 'assets/user.svg';

//getting the form 
const form = document.querySelector('form');
//getting the id #chat-container
const chatContainer = document.querySelector('#chat-container');

let loadInterval;

//load AI answers
function loader(element) {
element.textContent = '';

loadInterval = setInterval(() => {
  element.textContent += '.';

  if (element.textContent === '....') {
    element.textContent = '';
  }

}, 300)
}

//type text
function typeText(element, text) {
  let index = 0;

  let interval = setInterval(() => {
    if(index < text.length) {
      element.innerHTML += text.chartAt(index);
      index++;
  } else {
    clearInterval(interval);
  }
}, 20)
}

//unique random id
function generateUniqueId() {
  const timestamp = Date.now();
  const randomNumber = Math.random();
  const hexadecimalString = randomNumber.toString(16);

  return `id-${timestamp}-${hexadecimalString}`;
}

//chatStripe

function chatStripe (isAi, value, uniqueId) {
  return (
    `
    <div class="wrapper ${isAi && 'ai'}">
    <div class="chat>
    <div className="profile">
    <img
    src="${isAi ? bot : user}"
    alt="${isAi ? 'bot' : 'user'}"
    />
    </div>
    <div class="message" id=${uniqueId}>${value}</div>//ai generated message
    </div>
    </div>
    `
  )
};
