import AOS from 'aos';
import 'aos/dist/aos.css'; 

/* Animations */

AOS.init();

AOS.init({

  disable: false, 
  startEvent: 'DOMContentLoaded', 
  initClassName: 'aos-init',
  animatedClassName: 'aos-animate', 
  useClassNames: false,
  disableMutationObserver: false, 
  debounceDelay: 50,
  throttleDelay: 99, 
  
  offset: 120, 
  delay: 0, 
  duration: 400, 
  easing: 'ease', 
  once: false,
  mirror: false, 
  anchorPlacement: 'top-bottom', 
});

/* Burger animation */

const burgerMenu = document.querySelector('.header__content__btn');
const openBurger = document.querySelector('.burger__wrapper');

let menuOpen = false;
burgerMenu.addEventListener('click', ()=>{
  if(!menuOpen){
    burgerMenu.classList.add('open');
    menuOpen = true;
    openBurger.setAttribute('style', 'right: 0; visibility: visible; opacity: 1')
  } else {
    burgerMenu.classList.remove('open');
    menuOpen = false;
    openBurger.setAttribute('style', 'right: -100%, visibility: hidden; opacity: 0')
  }
})

function closeBurger() {
  if (burgerMenu.classList.contains('open')) {
    burgerMenu.classList.remove('open');
    menuOpen = true;
    openBurger.setAttribute('style', 'right: -100%, visibility: hidden; opacity: 0')
  }
}

openBurger.addEventListener('click', closeBurger);

/* POP-UP */

const itemCardDeloitte = document.querySelector('.element-animation--1')
const itemCardFreelance = document.querySelector('.element-animation--2')
const overlayDel = document.querySelector('.deloitte')
const overlayFree = document.querySelector('.freelance')
const body = document.querySelector('body')


itemCardDeloitte.addEventListener('click', ()=>{
  overlayDel.setAttribute('style', 'display: block');
  body.setAttribute('style', 'overflow: hidden')
})

itemCardFreelance.addEventListener('click', ()=>{
  overlayFree.setAttribute('style', 'display: block');
  body.setAttribute('style', 'overflow: hidden')
})


const closePopUp = document.querySelectorAll('.pop-up__content__close')

closePopUp.forEach((item)=>{
  item.addEventListener('click', () => {
    overlayFree.setAttribute('style', 'display: none');
    overlayDel.setAttribute('style', 'display: none');
    body.setAttribute('style', 'overflow: visible')
  })
})

/* FORM */

const inputs = document.querySelectorAll('input, textarea');
const form = document.getElementById('form');

inputs.forEach((item)=>{
  item.setAttribute('required', '');
})

form.addEventListener('submit', formSend);

const submitFormButton = document.getElementById('submit');
submitFormButton.addEventListener('click', ()=>{
  inputs.forEach((item)=>{
    item.removeAttribute('required');
  })
})

async function formSend(e) {
  e.preventDefault();
  let error = formValidate(form);

  let formData = new FormData(form);


  if (error === 0){
    // form.classList.add('_sending');
    let response = await fetch('sendmail.php', {
      method: 'POST',
      body: formData
    });
    if(response.ok){
      let result = await response.json();
      alert(result.message);
      formPreview.innerHTML = '';
      form.reset();
    }else{
      alert('Ошибка!');
    }
  }else{
    alert('Заполните обязательные поля!');
  }
}

function formValidate(form){
  let error = 0;
  let formReq = document.querySelectorAll('._req');

  for (let i=0; i<formReq.length; i++){
    const input = formReq[i];
    formRemoveError(input);

    if(input.classList.contains('_email')){
      if(emailTest(input)){
        formAddError(input);
        error++;
      }
    }else if(input.getAttribute('type') === 'checkbox' && input.checked === false){
      formAddError(input);
        error++;
    }else{
      if(input.value === ''){
        formAddError(input);
        error++;
      }
    }
  }
  // submitFormButton.addEventListener('click', ()=>{
  //   inputs.forEach((item)=>{
  //     item.setAttribute('required');
  //   })
  // })
  return error;
}

function formAddError(input){
  input.parentElement.classList.add('_error');
  input.classList.add('_error')
}

function formRemoveError(input){
  input.parentElement.classList.remove('_error');
  input.classList.remove('_error');
}

function emailTest(input){
  return !/^\w+([\.-]?\w+)*@\w+([\.-]?\.\w{2,8})+$/.test(input.value);
}
