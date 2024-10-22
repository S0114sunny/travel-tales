// 獲取按鈕和所有選項
const dropdownButton = document.getElementById('dropdownFilter');
const dropdownItems = document.querySelectorAll('.dropdown-item');

// 為每個選項添加點擊事件
dropdownItems.forEach(item => {
    item.addEventListener('click', function (e) {
        // e.preventDefault(); // 阻止預設鏈接行為
        const selectedText = this.textContent; // 獲取選項的文本內容
        dropdownButton.textContent = selectedText; // 將按鈕文本更新為選中的選項
        dropdownButton.style.color =  '#000';
    });
});

// singleTrip有兩個dropdown
// 獲取按鈕和所有選項
const dropdownButton2 = document.getElementById('dropdownFilter2');
const dropdownItems2 = document.querySelectorAll('.dropdown-item');

// 為每個選項添加點擊事件
dropdownItems2.forEach(item => {
    item.addEventListener('click', function (e) {
        // e.preventDefault(); // 阻止預設鏈接行為
        const selectedText = this.textContent; // 獲取選項的文本內容
        dropdownButton2.textContent = selectedText; // 將按鈕文本更新為選中的選項
        dropdownButton2.style.color =  '#000';
    });
});