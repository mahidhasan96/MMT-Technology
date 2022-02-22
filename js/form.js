const { lavender } = require("color-name");
const { response } = require("express");

const loader = document.querySelector('.loader');

// select input


const submitBtn = document.querySelector('.submit-btn');
const name = document.querySelector('#name');
const email = document.querySelector('#password');
const password = document.querySelector('#password');
const number = document.querySelector('#number');
const tac = document.querySelector('#terms-and-cond');
const notificaions = document.querySelector('#notificaions');

submitBtn.addEventListener('click', () => {
   if(name.value.length < 3{
       showAlert('name must be 3 letters long');
   } else if(!email.value.length){
       showAlert('enter your email');
   } else if(password.value.length < 8){
       showAlert('password must be 8 latters long');

   } else if(!number.value.length){
       showAlert('enter your phone numer');
   }else if(!number(number.value) || number.value.length < 10){
       showAlert('invalid number, please enter a valid numbr');

   }else if(!tac.checked){
       showAlert('you must agree to our terms and conditions');

   }else{
       //submit form
    loader.style.display = 'block';

   }
    
})

//send data

const sendData = (path, data) =>{
    fetch(path, {
        method: 'post',
        headers: new headers({'Content=Type': 'application/json'});
        body: JSON.stringify(data)
    }).then((res) => res.json())
    .then(response => {
        console.log(response);
    })
}

//alert function

const showAlert = (msg) =>{
    let alertBox = document.querySelector('.alert-box');
    let alertMsg = document.querySelector('.alert-msg');
    alertMsg.innerHTML = msg;
    alertBox.classList.add('show');
    setTimeout(() =>{
        alertBox.classList.remove('show');
    }, 3000);
}
    