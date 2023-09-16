import $ from "jquery";
import { shampooList } from "../data/shampooList";

// 獲取當前頁面的URL
const currentUrl = window.location.href;

// 解析URL中的query string
const urlParams = new URLSearchParams(currentUrl.split("?")[1]);

// 獲取名為 "param" 的參數的值
const paramValue = urlParams.get("param");

// 在控制台上輸出參數的值（您可以根據需要將其用於頁面上的其他操作）
console.log("參數的值是：" + paramValue);

let html = "";

shampooList.forEach((shampoo) => {
  html += `<div class="card me-0 me-lg-4 mb-4" style="width: 18rem;">
    <div class="m-3 d-flex justify-content-between align-items-center">
        <div><span class="p-1 me-2" style="border: 1px solid rgba(0, 0, 0, 0.175)">${shampoo.brand}</span></div>
        <div>
            <span class="p-1 me-2" style="background-color: ${shampoo.scalpColor}">${shampoo.scalpType}</span>
            <span class="p-1" style="background-color: ${shampoo.needColor}">${shampoo.needType}</span>
        </div>
    </div>
    <img src=${shampoo.image} class="card-img-top" alt=${shampoo.imageAlt}>
    <div class="card-body text-center">
        <h5 class="card-title mb-3">${shampoo.name}</h5>
        <a href=${shampoo.href} class="btn btn-primary" target="_blank">前往選購</a>
    </div>
</div>`;
});

$("#shampoo-list").append(html);

// 根據參數值選取對應的checkbox
if (paramValue) {
  const checkbox = document.querySelector(
    `input[type="checkbox"][value="${paramValue}"]`
  );
  if (checkbox) {
    checkbox.checked = true;
  }
}

// Function to filter and display shampoo items
function filterShampooItems() {
  const selectedBrands = $('input[type="checkbox"][id^="brand"]:checked')
    .map(function () {
      console.log(this.value);
      return this.value;
    })
    .get();

  const selectedScalpConditions = $(
    'input[type="checkbox"][id^="check-"]:checked'
  )
    .map(function () {
      return this.value;
    })
    .get();

  const selectedHairNeeds = $('input[type="checkbox"][id^="check0"]:checked')
    .map(function () {
      return this.value;
    })
    .get();

  console.log(selectedScalpConditions, selectedHairNeeds);

  const filteredShampooList = shampooList.filter((shampoo) => {
    const brandMatch =
      selectedBrands.length === 0 || selectedBrands.includes(shampoo.brand);
    const scalpConditionMatch =
      selectedScalpConditions.length === 0 ||
      selectedScalpConditions.includes(shampoo.scalpType);
    const hairNeedMatch =
      selectedHairNeeds.length === 0 ||
      selectedHairNeeds.includes(shampoo.needType);

    console.log(brandMatch, scalpConditionMatch, hairNeedMatch);
    return brandMatch && scalpConditionMatch && hairNeedMatch;
  });

  // Clear the shampoo list
  $("#shampoo-list").empty();

  // Generate and append the filtered shampoo items
  let html = "";
  if (filteredShampooList.length === 0) {
    html += `<p class="mx-auto">查無結果</p>`;
  } else {
    filteredShampooList.forEach((shampoo) => {
      html += `<div class="card me-0 me-lg-4 mb-4" style="width: 18rem;">
            <div class="m-3 d-flex justify-content-between align-items-center">
                <div><span class="p-1 me-2" style="border: 1px solid rgba(0, 0, 0, 0.175)">${shampoo.brand}</span></div>
                <div>
                    <span class="p-1 me-2" style="background-color: ${shampoo.scalpColor}">${shampoo.scalpType}</span>
                    <span class="p-1" style="background-color: ${shampoo.needColor}">${shampoo.needType}</span>
                </div>
            </div>
            <img src=${shampoo.image} class="card-img-top" alt=${shampoo.imageAlt}>
            <div class="card-body text-center">
                <h5 class="card-title mb-3">${shampoo.name}</h5>
                <a href=${shampoo.href} class="btn btn-primary" target="_blank">前往選購</a>
            </div>
        </div>`;
    });
  }

  $("#shampoo-list").append(html);
}

// Event handlers for checkboxes
$('input[type="checkbox"]').on("change", function () {
  filterShampooItems();
});

// Initialize the shampoo list on page load
filterShampooItems();
