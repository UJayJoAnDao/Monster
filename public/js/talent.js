//定義圖片和對應的正確答案
const images = [
    { src: 'images/talent/quetion1.png', answer: 'A' },
    { src: 'images/talent/quetion2.png', answer: 'B' },
    { src: 'images/talent/quetion3.png', answer: 'C' },
    { src: 'images/talent/quetion4.png', answer: 'D' },
];

// 按照指定機率生成隨機數組
const weightedImages = [];
for (let i = 0; i < 100; i++) {
    if (i < 5) {
        weightedImages.push(images[0]);
    } else if (i < 36.6) {
        weightedImages.push(images[1]);
    }
    else if (i < 68.2) {
        weightedImages.push(images[2]);
    }
    else {
        weightedImages.push(images[3]);
    }
}

// 隨機選擇一張圖片
const randomImage = weightedImages[Math.floor(Math.random() * weightedImages.length)];

// 設置圖片的src屬性
document.getElementById('randomImage').src = randomImage.src;

function checkAnswer(selectedOption) {
    const resultElement = document.getElementById('result');

    if (selectedOption === randomImage.answer) {
        resultElement.textContent = '恭喜';
        resultElement.className = 'result correct';
    } else {
        resultElement.textContent = '錯誤';
        resultElement.className = 'result incorrect';
    }

}