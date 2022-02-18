'use strict';

// 1.
// Предусмотреть в html input и p: в инпут вводить параметр (число), 
// которое считается радиусом шара, в p показывать объем шара при заданном параметре. 
// На инпут навесить валидацию. (расчет и вывод рассчитанного значения в p реализовать в обработчике события input)
if(document.querySelector('#radius')){
  const inputRadius = document.querySelector('#radius')
  inputRadius.oninput = function() {
    const r = Number(inputRadius.value);
    console.log('r :>> ', r);
    document.getElementById('result').innerHTML = Math.round(4 / 3 * Math.PI * r * r * r * 100 ) / 100 
  };
}




// const form  = document.getElementsByTagName('form')[0];

// const firstName = document.getElementById('firstName');
// const lastName = document.getElementById('lastName');
// const email = document.getElementById('mail');

// const firstNameError = document.querySelector('#firstName + span.error');
// const lastNameError = document.querySelector('#lastName + span.error');
// const emailError = document.querySelector('#mail + span.error');

// var inputs = form.querySelectorAll('input')

// form.addEventListener('submit', function (event) {
//   event.preventDefault()

//   for (var i = 0; i < inputs.length; i++) {
//     if (!inputs[i].value) {
//       inputs[i].classList.add('error')
//     } else {
//       inputs[i].classList.remove('error')
//     }
//   }
// })
