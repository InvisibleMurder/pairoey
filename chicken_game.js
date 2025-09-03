document.addEventListener('DOMContentLoaded', () => {
    const timerDisplay = document.getElementById('timer');
    const moneyDisplay = document.getElementById('money');
    const chickenImage = document.getElementById('chicken-image');
    const statusMessage = document.getElementById('status-message');
    const buyGrainButton = document.getElementById('buy-grain');
    const feedChickenButton = document.getElementById('feed-chicken');

    // ตัวแปรสำหรับเกม
    let timeLeft = 1200; // 20 นาทีในหน่วยวินาที
    let money = 0;
    const grainPrice = 20;
    let lastFedTime = Date.now();
    const feedInterval = 5 * 60 * 1000; // 5 นาทีในหน่วยมิลลิวินาที

    // ฟังก์ชันสำหรับอัปเดตนาฬิกา
    function updateTimer() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        
        timeLeft--;

        if (timeLeft < 0) {
            alert('Game Over! You ran out of time.');
            // ใส่โค้ดสำหรับรีเซ็ตเกมที่นี่
        }
    }

    // ฟังก์ชันสำหรับอัปเดตสถานะไก่
    function updateChickenStatus() {
        const timeSinceLastFed = Date.now() - lastFedTime;
        if (timeSinceLastFed > feedInterval) {
            // ไก่ตายถ้าไม่ได้ให้อาหาร
            chickenImage.src = 'https://via.placeholder.com/200x200/000000/FFFFFF?text=DEAD';
            statusMessage.textContent = 'Your chicken has died from starvation. Game over!';
            // หยุดเกม
            clearInterval(gameInterval);
            clearInterval(timerInterval);
            buyGrainButton.disabled = true;
            feedChickenButton.disabled = true;
        } else {
            // ไก่มีความสุข
            chickenImage.src = 'http://googleusercontent.com/generated_image_content/0';
            statusMessage.textContent = 'Your chicken is happy!';
        }
    }

    // ฟังก์ชันสำหรับซื้อเมล็ดข้าว
    buyGrainButton.addEventListener('click', () => {
        // ยังไม่ได้ทำระบบเงินที่นี่
    });

    // ฟังก์ชันสำหรับให้อาหารไก่
    feedChickenButton.addEventListener('click', () => {
        lastFedTime = Date.now();
        updateChickenStatus();
        statusMessage.textContent = 'You fed your chicken!';
        // ใส่โค้ดสำหรับให้อาหารและเงินที่นี่
    });

    const timerInterval = setInterval(updateTimer, 1000);
    const gameInterval = setInterval(updateChickenStatus, 1000);
});
