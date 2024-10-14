// const tabs = document.querySelectorAll('.klk-tabs-item');

// tabs.forEach(tab => {
//     tab.addEventListener('click', () => {
//         // 移除所有 tab 的激活状态
//         tabs.forEach(item => item.classList.remove('klk-tabs-item-active'));
//         // 为当前点击的 tab 添加激活状态
//         tab.classList.add('klk-tabs-item-active');

//         // 获取当前 tab 的 data-tab 属性对应的内容块 id
//         const targetTab = tab.getAttribute('data-tab');
//         const targetContent = document.getElementById(targetTab);

//         // 平滑滚动到对应的内容区域
//         targetContent.scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

const picModal = document.getElementById('picModal');
picModal.addEventListener('shown.bs.modal', () => {
    // 獲取第一個縮圖
    const firstThumbnail = picModal.querySelector('.thumbnails');

    if (firstThumbnail) {
        const firstSrc = firstThumbnail.src;
        document.getElementById("picModal_mainImage").src = firstSrc;
        firstThumbnail.style.border = "4px solid #FACC44"; // 自定義的黃色邊框
    }
});

function changePicModalImage(imgElement, page) {
    // 獲取點擊的圖片的 src
    var newSrc = imgElement.src;

    // 將主圖片的 src 設置為點擊的圖片的 src
    document.getElementById("picModal_mainImage").src = newSrc;
    // 移除所有縮圖的高亮樣式
    var thumbnails = picModal.getElementsByClassName("thumbnails");
    for (var i = 0; i < thumbnails.length; i++) {
        thumbnails[i].style.border = "none"; // 移除邊框或高亮效果
    }
    document.getElementById("picModal_imgPage").textContent = page;
    imgElement.style.border = "4px #FACC44 solid";
}

const commentModal = document.getElementById('commentModal');
commentModal.addEventListener('shown.bs.modal', () => {
    // 獲取第一個縮圖
    const firstThumbnail = commentModal.querySelector('.thumbnails');

    if (firstThumbnail) {
        const firstSrc = firstThumbnail.src;
        document.getElementById("commentModal_mainImage").src = firstSrc;
        firstThumbnail.style.border = "4px solid #FACC44"; // 自定義的黃色邊框
    }
});

function changeCommentModalImage(imgElement, page) {
    // 獲取點擊的圖片的 src
    var newSrc = imgElement.src;

    // 將主圖片的 src 設置為點擊的圖片的 src
    document.getElementById("commentModal_mainImage").src = newSrc;
    // 移除所有縮圖的高亮樣式
    var thumbnails = commentModal.getElementsByClassName("thumbnails");
    for (var i = 0; i < thumbnails.length; i++) {
        thumbnails[i].style.border = "none"; // 移除邊框或高亮效果
    }
    document.getElementById("commentModal_imgPage").textContent = page;
    imgElement.style.border = "4px #FACC44 solid";
}

function changeColor(iconElement, color) {
    var selectClassList = iconElement.classList;
    console.log(selectClassList);
    if (selectClassList.contains('select')) {
        iconElement.style.color = '#B7B7B7';
        iconElement.classList.remove('select');
    } else {
        iconElement.style.color = color;
        iconElement.classList.add('select');
    }
}