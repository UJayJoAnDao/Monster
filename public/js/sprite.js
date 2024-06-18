// 精靈數據

// 動態生成精靈
var spriteTypesContainer = document.getElementById("spriteTypes");
var currentType = null;
var typeContainers = {};

function generateSpiritCards(spirits) {
    var spriteTypesContainer = document.getElementById("spriteTypes");
    var typeContainers = {};

    spirits.forEach(function (spirit) {
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
        img.dataset.id = spirit.id //在圖片儲存ID
        img.dataset.name = spirit.name; // 在圖片上儲存精靈名稱
        img.dataset.info = spirit.info; // 在圖片上儲存資訊
        img.addEventListener("click", showSpiritInfo); // 添加點擊事件監聽器
        var p = document.createElement("p");
        p.textContent = spirit.name;
        spiritCard.appendChild(img);
        spiritCard.appendChild(p);
        typeContainers[spirit.type].appendChild(spiritCard);
    });
}
const username = window.location.pathname.split('/').pop();
// 發送 GET 請求到後端獲取用戶和精靈數據
fetch(`http://127.0.0.1:5000/user?name=${username}`, { method: 'GET' })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        const sprites = data.sprites;

        // 將後端返回的精靈數據存入 allSpirits 陣列
        allSpirits = sprites.map(spirit => ({
            id: spirit[0],
            type: spirit[1],
            name: spirit[2],
            image: spirit[3],
            info: spirit[4]
        }));

        // 動態生成精靈卡片
        generateSpiritCards(allSpirits);
    })
    .catch(error => console.error('Error fetching user or spirits data:', error));

// 顯示精靈資訊的函數
function showSpiritInfo(event) {
    var Id = event.target.dataset.id
    var spiritName = event.target.dataset.name;
    var experience = event.target.dataset.experience;
    var info = event.target.dataset.info;

    var userResponse = confirm('ID:' + Id + '\n精靈名稱：' + spiritName + '\n經驗值：' + experience + '\n資訊：' + info + '\n\n是否要將此精靈設置在主畫面上？');
    if (userResponse) {
        // 如果用戶點選是，執行相應的動作
        alert('精靈' + spiritName + '已設置在主畫面上');
        // 此處可加入設置精靈在主畫面上的邏輯
    } else {
        // 如果用戶點選取消，關閉對話框即可
        alert('取消設置精靈');
    }
}

// 在每個精靈圖片上添加點擊事件監聽器
document.querySelectorAll('.spirit-card img').forEach(function (img) {
    img.addEventListener("click", showSpiritInfo);
});
