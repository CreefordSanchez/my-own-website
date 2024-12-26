'use strict';

import { listen, select, style } from './data/utility.js';

const submitBtn = select('.submit');
const form = select('form');

// Error outputs
const fullNameError = select('.full-name-error');
const emailError = select('.email-error');
const messageError = select('.message-error');

//Inputs
const fullName = select('.full-name');
const email = select('.email');
const message = select('.message');
const inputList = [fullName, email, message];

listen(submitBtn, 'click', (event) => {
  event.preventDefault();
  if (validation()) {
    
  }
});

function newUser(fullName, email, message) {
  const user = {
    fullName: fullName,
    email: email, 
    message: message
  }

  return user;
}

function validation() {
  const user = newUser(
    fullName.value, email.value, message.value
  );
  const checkValidation = [
    isNameValid(user), isEmailValid(user), isMessageValid(user)
  ];
  
  if (checkValidation.includes(false)) return false;
  return true;
}

function isNameValid(user) {
  let isValid = true;
  let userName = user.fullName.trim();

  if (userName.split(' ').length < 2 || userName.length < 5) {
    isValid = false;
    fullNameError.innerText = 'Enter a fullName';
  } else {
    fullNameError.innerText = '';
  }

  return isValid;
}

function isEmailValid(user) {
  let requirements = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.(co|com)$/;
  let userEmail = user.email;
  if(userEmail.length === 0) {
    emailError.innerText = 'Enter a email';
    return false;
  }

  if (requirements.test(user.email)) {
    emailError.innerText = '';
    return true;

  } else {
    emailError.innerText = 'example@gmail.com';
    return false;
  }
}

function isMessageValid(user) {
  if (user.message.length > 0) {
    messageError.innerText = '';
  return true;

  } else {
    messageError.innerText = 'Enter a message';
    return false;
  }
}

function errorLine(selector, bool) {
  if (bool) {
    let redLine = '1px solid #ff0000'
    style(selector, 'border', redLine);
  } else {
    let removeLine = '1px solid #141414'
    style(selector, 'border', removeLine);
  }
}