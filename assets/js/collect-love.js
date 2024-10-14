// 取得所有 .collect-love_bg 元素
let collectLoves = document.querySelectorAll('.collect-love_bg');

// 預設第二個收藏愛心為 active
if (collectLoves.length > 1) {
  collectLoves[1].classList.add('active'); 
}

// 為每個元素增加點擊事件
collectLoves.forEach(function(collectLove) {
  collectLove.addEventListener('click', function(event) {
     // 阻止 a 連結的預設行為
    event.preventDefault();
     // 阻止事件冒泡
    event.stopPropagation();
    // 點選會切換成 active 時會改變顏色
    this.classList.toggle('active');
  });
});

