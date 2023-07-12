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
let menuOpen = false;
burgerMenu.addEventListener('click', ()=>{
  if(!menuOpen){
    burgerMenu.classList.add('open');
    menuOpen = true;
  } else {
    burgerMenu.classList.remove('open');
    menuOpen = false;
  }
})