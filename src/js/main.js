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

const itemCards = document.querySelectorAll('.element-animation')
const overlay = document.querySelector('.overlay')

itemCards.forEach((item) => {
  item.addEventListener('click', ()=>{
    overlay.setAttribute('style', 'display: block')
  })
})

const closePopUp = document.querySelector('.pop-up__content__close')
closePopUp.addEventListener('click', () => {
  overlay.setAttribute('style', 'display: none')
})