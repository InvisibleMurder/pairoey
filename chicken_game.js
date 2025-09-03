Document.addEventListener('DOMContentLoaded', () => {
    const timerDisplay = document.getElementById('timer');
    const moneyDisplay = document.getElementById('money');
    const chickenImage = document.getElementById('chicken-image');
    const statusMessage = document.getElementById('status-message');
    const buyGrainButton = document.getElementById('buy-grain');
    const feedChickenButton = document.getElementById('feed-chicken');

    // ตัวแปรสำหรับเกม
    let timeLeft = 1200; // 20 นาทีในหน่วยวินาที
    let money = 200; // เริ่มเกมด้วยเงิน 200 ดอลลาร์
    const grainPrice = 20;
    let lastFedTime = Date.now();
    const feedInterval = 5 * 60 * 1000; // 5 นาทีในหน่วยมิลลิวินาที
    let gameOver = false;

    // อัปเดตหน้าจอเงินเริ่มต้น
    moneyDisplay.textContent = `$${money}`;

    // ฟังก์ชันสำหรับอัปเดตนาฬิกา
    function updateTimer() {
        if (gameOver) return;

        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        
        timeLeft--;

        if (timeLeft < 0) {
            alert('Game Over! You ran out of time.');
            endGame();
        }
    }

    // ฟังก์ชันสำหรับอัปเดตสถานะไก่
    function updateChickenStatus() {
        if (gameOver) return;

        const timeSinceLastFed = Date.now() - lastFedTime;
        if (timeSinceLastFed > feedInterval) {
            // ไก่ตายถ้าไม่ได้ให้อาหาร
            chickenImage.src = 'dead_chicken.jpeg'; // เปลี่ยนตรงนี้สำหรับรูปไก่ตาย
            statusMessage.textContent = 'Your chicken has died from starvation. Game over!';
            endGame();
        } else {
            // ไก่มีความสุข
            chickenImage.src = 'chick.jpeg'; // เปลี่ยนตรงนี้ให้เป็นชื่อไฟล์รูปไก่ของคุณ
            statusMessage.textContent = 'Your chicken is happy!';
        }
    }

    // ฟังก์ชันสำหรับจบเกม
    function endGame() {
        gameOver = true;
        clearInterval(gameInterval);
        clearInterval(timerInterval);
        buyGrainButton.disabled = true;
        feedChickenButton.disabled = true;
    }

    // ฟังก์ชันสำหรับซื้อเมล็ดข้าว
    buyGrainButton.addEventListener('click', () => {
        if (gameOver) return;

        if (money >= grainPrice) {
            money -= grainPrice;
            moneyDisplay.textContent = `$${money}`;
            statusMessage.textContent = `You bought a bag of grain for $${grainPrice}.`;
        } else {
            statusMessage.textContent = 'Not enough money to buy grain!';
        }
    });

    // ฟังก์ชันสำหรับให้อาหารไก่
    feedChickenButton.addEventListener('click', () => {
        if (gameOver) return;

        lastFedTime = Date.now();
        updateChickenStatus();
        statusMessage.textContent = 'You fed your chicken!';
    });

    const timerInterval = setInterval(updateTimer, 1000);
    const gameInterval = setInterval(updateChickenStatus, 1000);

    // เรียกใช้ครั้งแรกเพื่อให้แสดงรูปไก่เริ่มต้น
    updateChickenStatus(); 
});
