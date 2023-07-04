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

/* Form */

// const inputs = document.querySelectorAll('.contacts__wrapper__form_item')
// // console.log([inputs])
// const labels = document.querySelectorAll('.contacts__wrapper__form_item label')
// // console.log(labels)

// function noOverlayInputs () {
//   inputs.forEach((item)=>{
//     // e.target.value !== 0 ? item.classList.add('block') : e.target.value == 0;
//     console.log(item)
//   })
// }
// noOverlayInputs()