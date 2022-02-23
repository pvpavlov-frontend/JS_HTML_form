'use strict';

// 1.
// Предусмотреть в html input и p: в инпут вводить параметр (число), 
// которое считается радиусом шара, в p показывать объем шара при заданном параметре. 
// На инпут навесить валидацию. (расчет и вывод рассчитанного значения в p реализовать в обработчике события input)
if (document.querySelector('#radius')) {
    const inputRadius = document.querySelector('#radius')
    inputRadius.oninput = function() {
        const r = Number(inputRadius.value);
        console.log('r :>> ', r);
        document.getElementById('result').innerHTML = Math.round(4 / 3 * Math.PI * r * r * r * 100) / 100
    };
}


const form = document.querySelector('.formWithValidation')
const validateBtn = form.querySelector('.validateBtn')
const from = form.querySelector('.from')
const password = form.querySelector('.password')
const passwordConfirmation = form.querySelector('.passwordConfirmation')
const where = form.querySelector('.where')
const message = form.querySelector('.message')
const fields = form.querySelectorAll('.field')

const generateError = function (text) {
  const error = document.createElement('div')
  error.className = 'error'
  error.style.color = 'red'
  error.innerHTML = text
  return error
}

const removeValidation = function () {
  const errors = form.querySelectorAll('.error')

  for (const i = 0; i < errors.length; i++) {
    errors[i].remove()
  }
}

const checkFieldsPresence = function () {
  for (let i = 0; i < fields.length; i++) {
    if (!fields[i].value) {
      console.log('field is blank', fields[i])
      const error = generateError('Cannot be blank')
      form[i].parentElement.insertBefore(error, fields[i])
    }
  }
}

const checkPasswordMatch = function () {
  if (password.value !== passwordConfirmation.value) {
    console.log('not equals')
    const error = generateError('Password doesnt match')
    password.parentElement.insertBefore(error, password)
  }
}

form.addEventListener('submit', function (event) {
  event.preventDefault()

  removeValidation()

  checkFieldsPresence()

  checkPasswordMatch()
})