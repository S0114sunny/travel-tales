import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';



//日曆
const elem = document.querySelector('input[name="datepicker"]');
const datepicker = new Datepicker(elem, {
  autohide: true,
  language: 'zh-CN',
}); 
const elem2 = document.querySelector('input[name="datepicker2"]');
const datepicker2 = new Datepicker(elem2, {
  autohide: true,
  language: 'zh-CN',
}); 

const elem3 = document.querySelector('input[name="datepicker3"]');
const datepicker3 = new Datepicker(elem3, {
  autohide: true,
  language: 'zh-CN',
}); 
const elem4 = document.querySelector('input[name="datepicker4"]');
const datepicker4 = new Datepicker(elem4, {
  autohide: true,
  language: 'zh-CN',
}); 



//監聽navber滾動
const navBarA = document.getElementById('navBarA');
const navBarB = document.getElementById('navBarB');
const navbara = document.getElementById('navbara');
const navbarb = document.getElementById('navbarb');
const logo = document.getElementById('logo');
const textColors = document.querySelectorAll('.textColor');
const textColors2 = document.querySelector('.textColor2');


//navber
window.addEventListener('scroll', () => {
  // 判斷是否滾動超过50px
  const isScrolled = window.scrollY > 50;
  // 判斷是否滾動底部<=50


  // 更新 navbar
  navBarA.classList.toggle('fixed-top', isScrolled);
  navBarA.classList.toggle('bg-light', isScrolled);
  navBarB.classList.toggle('fixed-top', isScrolled);
  navBarB.classList.toggle('bg-light', isScrolled);

  // 更新 navbara 和 navbarb
  navbara.classList.toggle('d-block', isScrolled);
  navbara.classList.toggle('d-none', !isScrolled);
  
  navbarb.classList.toggle('d-none', isScrolled);
  navbarb.classList.toggle('d-block', !isScrolled);
  

  //pc
  logo.classList.toggle('d-block', isScrolled);
  logo.classList.toggle('d-none', !isScrolled);

  textColors.forEach(textColor => {
    textColor.classList.toggle('text-primary-2', isScrolled);
    textColor.classList.toggle('text-white', !isScrolled);
    textColor.classList.toggle('linkline', isScrolled);

  });
  
  textColors2.classList.toggle('custom-2', isScrolled);
  textColors2.classList.toggle('custom-1', !isScrolled);
  
});
  
AOS.init({
  once: true
});