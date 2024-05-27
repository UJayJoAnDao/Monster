// 精靈數據
var spiritsData = [
    { type: "攻擊型", name: "精靈1", image: "images/sprite/sprite1.png", experience: 20, info: "攻擊時額外造成15點傷害" },
    { type: "攻擊型", name: "精靈2", image: "images/sprite/sprite2.png", experience: 20, info: "攻擊時額外獲得10塊錢" },
    { type: "防禦型", name: "精靈3", image: "images/sprite/sprite3.png", experience: 20, info: "減輕受到10點攻擊" },
    { type: "防禦型", name: "精靈4", image: "images/sprite/sprite4.png", experience: 20, info: "減少10塊被搜刮的錢" },
    { type: "普通型", name: "精靈5", image: "images/sprite/sprite5.png", experience: 20, info: "攻擊時額外造成5點傷害,減少3塊被搜刮的錢" },
    { type: "普通型", name: "精靈6", image: "images/sprite/sprite6.png", experience: 20, info: "攻擊時額外獲得3塊錢,減輕受到3點攻擊" },
    { type: "攻擊型", name: "精靈7", image: "images/sprite/sprite7.png", experience: 20, info: "把你全家骨灰都給楊了" }
];

// 動態生成精靈
var spriteTypesContainer = document.getElementById("spriteTypes");
var currentType = null;
var typeContainers = {};

spiritsData.forEach(function (spirit) {
    // 創建類型容器（如果不存在）
    if (!typeContainers[spirit.type]) {
        var typeContainer = document.createElement("div");
        typeContainer.className = "sprite-type";
        typeContainers[spirit.type] = typeContainer;
        spriteTypesContainer.appendChild(typeContainer);

        var typeHeader = document.createElement("h3");
        typeHeader.textContent = spirit.type;
        typeContainer.appendChild(typeHeader);
    }

    var spiritCard = document.createElement("div");
    spiritCard.className = "spirit-card";
    var img = document.createElement("img");
    img.src = spirit.image;
    img.alt = spirit.name;
    img.dataset.name = spirit.name; // 在圖片上儲存精靈名稱
    img.dataset.experience = spirit.experience; // 在圖片上儲存經驗值
    img.dataset.info = spirit.info; // 在圖片上儲存資訊
    img.addEventListener("click", showSpiritInfo); // 添加點擊事件監聽器
    var p = document.createElement("p");
    p.textContent = spirit.name;
    spiritCard.appendChild(img);
    spiritCard.appendChild(p);
    typeContainers[spirit.type].appendChild(spiritCard);
});
// 顯示精靈資訊的函數
function showSpiritInfo(event) {
    var spiritName = event.target.dataset.name;
    var experience = event.target.dataset.experience;
    var info = event.target.dataset.info;

    // 獲取模態視窗元素
    var modal = document.getElementById("spiritInfoModal");

    // 更新模態視窗內容
    modal.querySelector(".modal-title").textContent = "精靈資訊";
    modal.querySelector(".modal-body").innerHTML = `
        <p>精靈名稱：${spiritName}</p>
        <p>經驗值：${experience}</p>
        <p>資訊：${info}</p>
    `;

    // 顯示模態視窗
    $('#spiritInfoModal').modal('show');
}

// 在每個精靈圖片上添加點擊事件監聽器
document.querySelectorAll('.spirit-card img').forEach(function (img) {
    img.addEventListener("click", showSpiritInfo);
});
