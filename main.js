import './common/style.css'
import { Component } from './core/Component'
import { render } from './core/render'

const app = document.querySelector('#app');

let isCorectNameToUseBtn = false;
let isCorectPassToUseBtn = false;

//RENDER INPUT TO TAKE A NAME FROM USER
const nameInput = new Component({
  tagName : 'input',
  className : 'name--input',
  placeholder : 'Enter ur name'
}).toHtml()

render(nameInput, app);

nameInput.addEventListener("keyup", (e) =>{
  if(e.target.value.length < 2){
    nameInput.style.background = 'red';
  } 
  else {
    nameInput.style.background = 'lightgreen';
    isCorectNameToUseBtn = true;
  }

  isCorrectData(sendBtn,isCorectNameToUseBtn,isCorectPassToUseBtn);
})

//RENDER INPUT TO TAKE A PHONE NUMBER FROM USER
const phoneNumInput = new Component({
  tagName : 'input',
  className : 'number--input',
  placeholder : 'Enter ur phone number'
}).toHtml()

render(phoneNumInput, app);

phoneNumInput.addEventListener("keyup", (e) =>{
  if(e.target.value.length !== 10){
    phoneNumInput.style.background = 'red';
  } 
  else {
    phoneNumInput.style.background = 'lightgreen';
    isCorectPassToUseBtn = true;
  }

  isCorrectData(sendBtn,isCorectNameToUseBtn,isCorectPassToUseBtn);
})

//CREATE BTN-WRAPPER TO SEND ALL DATA 
const sendBtnWrapper = new Component({
  tagName : 'div',
  className : 'sendBtn-wrapper',
}).toHtml()

render(sendBtnWrapper, app);


//CREATE BTN TO SEND ALL DATA 
const sendBtn = new Component({
  tagName : 'button',
  className : 'sendBtn',
  textContent : 'SEND!'
}).toHtml()

sendBtn.disabled = true;

render(sendBtn, sendBtnWrapper);

sendBtn.addEventListener("click", (e) => {
  const userData = {
    userName : nameInput.value,
    phoneNumber : createPhoneFormat(phoneNumInput.value)
  };

  console.log(userData);
  
  const modalWindow = new Component({
    tagName : 'div',
    id : 'modal--window',
    textContent : `Hello, ${userData.userName}. We will phone u
    in 30 min by ${userData.phoneNumber} number.Thanks for watchig!`
  }).toHtml()

  render(modalWindow, app);
})

function isCorrectData(btn, isCorrectName, isCorrectPass) {
  if(!isCorrectName && !isCorrectPass){
    btn.style.background = 'grey';
  } 
  else if(isCorrectName && isCorrectPass){
    btn.disabled = false;
    btn.style.background = 'blueviolet';
  }  
}

function createPhoneFormat(value) {
  let readyPhoneNumber = [];

  for(let i = -1; i < value.length; i++){
    switch (i) {
      case 0:
        readyPhoneNumber.push('(');
        readyPhoneNumber.push(value[i]);
        break;

      case 1:
        readyPhoneNumber.push(value[i]);
        break;
      
      case 2:
        readyPhoneNumber.push(value[i]);
        break;

      case 3:
        readyPhoneNumber.push(')');
        readyPhoneNumber.push(' ');
        readyPhoneNumber.push(value[i]);
        break;

      case 4:
        readyPhoneNumber.push(value[i]);
        break;

      case 5:
        readyPhoneNumber.push(value[i]);
        break;

      case 6:
        readyPhoneNumber.push('-');
        readyPhoneNumber.push(value[i]);
        break;

      case 7:
        readyPhoneNumber.push(value[i]);
        break;

      case 8:
        readyPhoneNumber.push(value[i]);
        break;

      case 9:
        readyPhoneNumber.push(value[i]);
        break;
    
      default:
        break;
    }
  }

  return readyPhoneNumber.join('');
}
