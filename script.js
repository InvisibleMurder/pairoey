document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const loginButton = document.querySelector('button');
    const message = document.getElementById('message');
    const passwordInput = document.getElementById('password');
    const usernameInput = document.getElementById('username'); // เพิ่มสำหรับ Username input
    const body = document.body; // อ้างอิงถึง bodyเพื่อเปลี่ยนสีพื้นหลัง

    let clickCount = 0; // ตัวแปรสำหรับนับจำนวนครั้งที่กด
    const prankMessages = [
        'Incorrect password. Try again.',
        'Seriously, what are you even trying to type?',
        'This is hopeless. You are not getting in.',
        'Give up. This is a trap.',
        'I already told you. This is a trap! Go do something else.',
        'You are a persistent one, I\'ll give you that. But no.',
        'This game is not for you. Find another one.',
        'Do you really think it\'s going to work this time?',
        'I am impressed by your dedication, but also a little worried.',
        'Fine. You win. Now get out of here.'
    ];

    // กำหนดชื่อผู้ใช้และรหัสผ่านที่ถูกต้อง
    const correctUsername = 'user'; // สามารถเปลี่ยนได้
    const correctPassword = 'password'; // สามารถเปลี่ยนได้

    // --- ส่วนของไฟดิสโก้ ---
    function changeBackgroundColor() {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
        body.style.backgroundColor = randomColor;
    }
    // ตั้งค่าให้เปลี่ยนสีทุก 0.5 วินาที
    setInterval(changeBackgroundColor, 100);

    // --- ทำให้ช่องรหัสผ่านพิมพ์ไม่ได้ (เปลี่ยนตัวอักษร) ---
    passwordInput.addEventListener('input', (e) => {
        const inputChar = e.data;
        if (inputChar) {
            e.target.value = e.target.value.slice(0, -1) + '😂';
        }
    });

    // --- ทำให้ปุ่มเลื่อนหนีเวลาเอาเมาส์ไปชี้ ---
    loginButton.addEventListener('mouseover', () => {
        // ต้องตรวจสอบให้แน่ใจว่าปุ่มอยู่ในตำแหน่ง 'absolute' เพื่อให้เลื่อนได้
        loginButton.style.position = 'absolute'; 

        const buttonWidth = loginButton.offsetWidth;
        const buttonHeight = loginButton.offsetHeight;
        const containerRect = loginForm.getBoundingClientRect(); // รับขนาดของ form
        const containerWidth = containerRect.width;
        const containerHeight = containerRect.height;
        
        // คำนวณตำแหน่งใหม่ภายในขอบเขตของ form
        const newX = Math.random() * (containerWidth - buttonWidth);
        const newY = Math.random() * (containerHeight - buttonHeight);

        loginButton.style.left = `${newX}px`;
        loginButton.style.top = `${newY}px`;
    });

    // --- เมื่อกดปุ่มเข้าสู่ระบบ ---
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // ป้องกันการรีเฟรชหน้าเว็บ

        // ตรวจสอบชื่อผู้ใช้และรหัสผ่าน
        if (usernameInput.value === correctUsername && passwordInput.value === correctPassword) {
            // ถ้าถูกต้อง, พาไปหน้าเลือกเกม
            window.location.href = 'index.html'; // จะไปหน้า main menu ที่เราจะสร้าง
        } else {
            // ถ้าผิด, ให้ปุ่มดิ้นและแสดงข้อความกวนๆ
            clickCount++;
            if (clickCount <= prankMessages.length) {
                message.textContent = prankMessages[clickCount - 1];
            } else {
                message.textContent = 'Okay, this is getting ridiculous. There is no winning. Just stop.';
            }

            // ทำให้ปุ่มดิ้นเมื่อกด
            // ปรับตำแหน่งปุ่มใหม่เมื่อมีการ Submit (นอกเหนือจาก Mouseover)
            const buttonWidth = loginButton.offsetWidth;
            const buttonHeight = loginButton.offsetHeight;
            const containerRect = loginForm.getBoundingClientRect();
            const containerWidth = containerRect.width;
            const containerHeight = containerRect.height;
            
            loginButton.style.position = 'absolute';
            loginButton.style.left = `${Math.random() * (containerWidth - buttonWidth)}px`;
            loginButton.style.top = `${Math.random() * (containerHeight - buttonHeight)}px`;
            
            // ทำให้ช่องรหัสผ่านว่างเปล่า
            passwordInput.value = '';
        }
    });
});
