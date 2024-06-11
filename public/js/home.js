// 獲取所有按鈕元素
const friendBtn = document.querySelector('.friend');
const petBtn = document.querySelector('.sprites');
const eggBtn = document.querySelector('.egg');
const taskBtn = document.querySelector('.task');
const attackBtn = document.querySelector('.attack');
const defendBtn = document.querySelector('.defend');
const counterBtn = document.querySelector('.counter');
const shopBtn = document.querySelector('.shop');
const feedBtn = document.querySelector('.feed');
const playBtn = document.querySelector('.play');
const sleepBtn = document.querySelector('.sleep');
const cleanBtn = document.querySelector('.clean');
const talentBtn = document.querySelector('.talent');
const closeBtn = document.querySelector('.close');

// 獲取更多按鈕...

// 為每個按鈕添加點擊事件監聽器
feedBtn.addEventListener('click', feedPet);
playBtn.addEventListener('click', playWithPet);
cleanBtn.addEventListener('click', cleanPet);
shopBtn.addEventListener('click', showShopPage);
friendBtn.addEventListener('click', showSocialPage);
petBtn.addEventListener('click', showSpritePage);
eggBtn.addEventListener('click', showEggsPage);
taskBtn.addEventListener('click', showTaskPage);
attackBtn.addEventListener('click', showAttackPage);
defendBtn.addEventListener('click', showDefendPage);
counterBtn.addEventListener('click', showCounterPage);
talentBtn.addEventListener('click', showTalentPage);

// 頁面元素
const all_pages = document.querySelectorAll('.page');
const social_page = document.querySelector('.social-page');
const sprite_page = document.querySelector('.sprite-page');
const eggs_page = document.querySelector('.eggs-page');
const task_page = document.querySelector('.task-page');
const shop_page = document.querySelector('.shop-page');
const talent_page = document.querySelector('.talent-page');
const attack_page = document.querySelector('.attack-page');
const defend_page = document.querySelector('.defend-page');
const counter_page = document.querySelector('.counter-page');

const closeBtns = document.querySelectorAll('.header-close');
// all_pages.forEach(page => {
//     page.addEventListener('click', () => {
//         page.style.visibility = 'hidden';
//     });
// });
closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // 關閉這顆按鈕所在的頁面
        btn.parentElement.parentElement.style.visibility = 'hidden';
    })
});

// 定義按鈕功能函數
function feedPet() {
    // 餵藥功能的實現
}

function playWithPet() {
    // 陪玩功能的實現
}

function cleanPet() {
    // 洗澡功能的實現
}

function showShopPage() {
    all_pages.forEach(page => {
        page.style.visibility = 'hidden';
    });
    // 進入商店頁面
    shop_page.style.visibility = 'visible';
}

function showSocialPage() {
    // 社交功能的實現
    all_pages.forEach(page => {
        page.style.visibility = 'hidden';
    });
    social_page.style.visibility = 'visible';
}

function showSpritePage() {
    all_pages.forEach(page => {
        page.style.visibility = 'hidden';
    });
    sprite_page.style.visibility = 'visible';
}

function showEggsPage() {
    all_pages.forEach(page => {
        page.style.visibility = 'hidden';
    });
    eggs_page.style.visibility = 'visible';
}

function showTaskPage() {
    all_pages.forEach(page => {
        page.style.visibility = 'hidden';
    });
    task_page.style.visibility = 'visible';
}

function showTalentPage() {
    all_pages.forEach(page => {
        page.style.visibility = 'hidden';
    });
    talent_page.style.visibility = 'visible';
}

function showAttackPage() {
    all_pages.forEach(page => {
        page.style.visibility = 'hidden';
    });
    attack_page.style.visibility = 'visible';
}

function showDefendPage() {
    all_pages.forEach(page => {
        page.style.visibility = 'hidden';
    });
    defend_page.style.visibility = 'visible';
}

function showCounterPage() {
    all_pages.forEach(page => {
        page.style.visibility = 'hidden';
    });
    counter_page.style.visibility = 'visible';
}
// 定義更多功能函數...
const pet = document.querySelector('.pet-area > .pet'); // 獲取寵物的元素

// 獲取寵物的原始位置
let x_position = parseInt(window.getComputedStyle(pet).left);
let y_position = parseInt(window.getComputedStyle(pet).bottom)-100;

const x_step = 2; // 每一步移動的距離
const y_step = 2;
const amplitude = 2; // 跳動的幅度
const L = 10;
// 創建一個走路的動畫
const walk = setInterval(() => {
    let i = 0; 
    while (i<L) {
        if(Math.floor(Math.random()*100) < 30) {
            switch(Math.floor(Math.random()*4)) {
                case 0:
                    x_position += x_step;
                    break;
                case 1:
                    x_position -= x_step;
                    break;
                case 2:
                    break;
                case 3:
                    break;
            }
            switch(Math.floor(Math.random()*4)) {
                case 0:
                    y_position += y_step;
                    break;
                case 1:
                    y_position -= y_step;
                    break;
                case 2:
                    break;
                case 3:
                    break;
            }
            // 使用 Math.sin 函數來創建一個正弦波，使寵物在走路時上下跳動
            let newBottom = y_position + amplitude * Math.sin(x_position / x_step);
    
            pet.style.left = x_position + 'px'; // 將新的位置應用到寵物上
            pet.style.bottom = newBottom + 'px';
        }
        // // 確保新的高度不會超過父元素的高度
        // if (newBottom <= pet.parentElement.offsetHeight - pet.offsetHeight) {
        // }
            
        // 如果寵物已經走到了右邊界，則停止動畫
        if (x_position >= pet.parentElement.offsetWidth - pet.offsetWidth) {
            clearInterval(walk);
        }
        i++;
    }
}, 500); // 每100毫秒移動一次