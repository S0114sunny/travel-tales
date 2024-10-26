//topbtn
const topbtnJs =document.getElementById('topbtnJs');
const cartJS =document.getElementById('cartJS');


//navber
window.addEventListener('scroll', () => {
  // 判斷是否滾動超过50px
  const isScrolled = window.scrollY > 50;
  // 判斷是否滾動底部<=50
  const isToBottom = (document.documentElement.scrollHeight - window.scrollY - window.innerHeight) <= 50;

  //btn
  topbtnJs.classList.toggle('topbtnPostionFixed', isScrolled && !isToBottom);
  topbtnJs.classList.toggle('topbtnPostionAbsolute', isToBottom );

  
});

//滾動後得topbtn
window.addEventListener('scroll', () => {

  // 判斷是否碰到 cartJS
  const isToCart = cartJS.getBoundingClientRect().top <= window.innerHeight && cartJS.getBoundingClientRect().bottom >= 0;
  // 判斷是否<= 992
  const isViewMd = window.innerWidth <= 992 ;

  if (isToCart) {
    if (isViewMd) { // 手機
      topbtnJs.style.bottom = '15%'; 
    } 
  }
});
  