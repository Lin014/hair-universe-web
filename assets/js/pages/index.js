// 獲取所有具有特定CSS類（shampoo-card）的連結
const links = document.querySelectorAll('.shampoo-card');

// 添加點擊事件監聽器
links.forEach(link => {
  link.addEventListener('click', function(event) {
    // 阻止默認行為，以防止頁面跳轉
    event.preventDefault();

    // 獲取連結的data-param值
    const param = this.getAttribute('data-param');

    // 創建一個URL，將參數添加到query string中
    const url = `recommendation.html?param=${encodeURIComponent(param)}`;

    console.log(param)
    // 跳轉到下一頁
    window.location.href = url;
  });
});