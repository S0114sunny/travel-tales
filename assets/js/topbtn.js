//topbtn
const topbtnJs = document.querySelector('#topbtnJs');
const cartJS = document.querySelector('#cartJS');


//navber
window.addEventListener('scroll', () => {
  // 判斷是否滾動超过50px
  const isScrolled = window.scrollY > 50;
  // 判斷是否滾動底部<=50
  const isToBottom = (document.documentElement.scrollHeight - window.scrollY - window.innerHeight) <= 50;

  //btn
  topbtnJs.classList.toggle('topbtnPostionFixed', isScrolled && !isToBottom);
  topbtnJs.classList.toggle('topbtnPostionAbsolute', isToBottom);
});


// 判斷是否在 AA 頁面
if (window.location.pathname.includes('singleTrip.html')) {

  // 設定 bottom 值的函式
  const setBottomValue = () => {

    // 宣告
    const topbtnPostion = document.querySelector('.topbtnPostionFixed');

    if (topbtnPostion) {
      let bottomValue; // 定義變數
      if (window.innerWidth >= 992) {
        bottomValue = '5%'; // 寬度大於等於 992px 時的 bottom 值
      } else {
        bottomValue = '18%'; // 寬度小於 992px 時的 bottom 值
      }
      topbtnPostion.style.bottom = bottomValue; // 將值賦予到元素的樣式
    }
  };
  // 當滾動時更新 bottom 值
  window.addEventListener('scroll', setBottomValue);
  // 當窗口大小改變時更新 bottom 值
  window.addEventListener('resize', setBottomValue);
  // 在頁面加載完成後立即執行 setBottomValue
  document.addEventListener('DOMContentLoaded', setBottomValue);
  // 初始設定 bottom 值
  setBottomValue();
}