document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const loginButton = document.querySelector('button');
    const message = document.getElementById('message');
    const passwordInput = document.getElementById('password');
    const usernameInput = document.getElementById('username');

    let clickCount = 0; // ตัวแปรสำหรับนับจำนวนครั้งที่กด
    const prankMessages = [
        'Incorrect password. Try again.',
        'Seriously, what are you even trying to type?',
        'This is hopeless. You are not getting in.',
        'Give up. This is a trap.',
        'I already told you. This is a trap! Go do something else.'
    ];

    // กำหนดชื่อผู้ใช้และรหัสผ่านที่ถูกต้อง
    const correctUsername = 'user';
    const correctPassword = 'password';

    // ทำให้ปุ่มเลื่อนหนีเวลาเอาเมาส์ไปชี้
    loginButton.addEventListener('mouseover', () => {
        const buttonWidth = loginButton.offsetWidth;
        const buttonHeight = loginButton.offsetHeight;
        const containerWidth = loginForm.offsetWidth;
        const containerHeight = loginForm.offsetHeight;

        const newX = Math.random() * (containerWidth - buttonWidth);
        const newY = Math.random() * (containerHeight - buttonHeight);

        loginButton.style.position = 'absolute';
        loginButton.style.left = `${newX}px`;
        loginButton.style.top = `${newY}px`;
    });

    // เมื่อกดปุ่มเข้าสู่ระบบ
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // ป้องกันการรีเฟรชหน้าเว็บ

        // ตรวจสอบชื่อผู้ใช้และรหัสผ่าน
        if (usernameInput.value === correctUsername && passwordInput.value === correctPassword) {
            // ถ้าถูกต้อง, พาไปหน้าเลือกเกม
            window.location.href = 'index.html';
        } else {
            // ถ้าผิด, ให้ปุ่มดิ้นและแสดงข้อความกวนๆ
            clickCount++;
            if (clickCount <= prankMessages.length) {
                message.textContent = prankMessages[clickCount - 1];
            } else {
                message.textContent = 'This is getting ridiculous. There is no winning. Just stop.';
            }

            // ทำให้ปุ่มดิ้นเมื่อกด
            loginButton.style.left = `${Math.random() * 200}px`;
            loginButton.style.top = `${Math.random() * 200}px`;
            
            // ทำให้ช่องรหัสผ่านว่างเปล่า
            passwordInput.value = '';
        }
    });
});
