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

inputs.forEach((item)=>{
  item.setAttribute('required', '');
})

//Google Sheets
const scriptURL = 'https://script.google.com/macros/s/AKfycbx2iuOiJ_nXz8vJbEhHagGECeXJn7Rv6GtCGqhTV-YMt3drSBmRBSgErO58PrNPdb-y/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
})

//Pop-up
const modalWindow = document.querySelector('.over');
const modalButtons = document.querySelectorAll('.contacts__wrapper__form__button');
const modalClose = document.querySelector('.pop-up_form__close');
const contactInputs = document.querySelectorAll('[data-needed]');

const policy = document.querySelector('.privacy-policy__input');

// modal open
modalButtons.forEach((item) => {

    item.addEventListener('click', openModal);
});

// modal close
modalClose.addEventListener('click', closeModal);

// modal close on window
window.addEventListener('click', (e) => {
    if (e.target == modalWindow) {
        closeModal()
    }
});

document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
        closeModal()
    }
})

function openModal() {

    contactInputs.forEach((input) => {
        if ((input.value !== '') & (policy.checked)) {
            modalWindow.style.display = 'block'
            // modal scroll lock
            document.body.style.overflow = 'hidden'
            inputs.forEach((item)=>{
              item.removeAttribute('required', '');
            })
          }
        })
      }
      
      function closeModal() {
        modalWindow.style.display = 'none'
        // modal scroll unlock
        document.body.style.overflow = ''
        inputs.forEach((item)=>{
          item.setAttribute('required', '');
        })
        document.getElementById('form').reset()
}