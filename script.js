Document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const loginButton = document.querySelector('button');
    const message = document.getElementById('message');
    const passwordInput = document.getElementById('password');
    const usernameInput = document.getElementById('username');
    const body = document.body;

    // --- ส่วนกำหนดค่าที่ถูกต้อง ---
    const correctUsername = 'user'; 
    const correctPassword = 'password';

    // --- ส่วนของไฟดิสโก้ ---
    function changeBackgroundColor() {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
        body.style.backgroundColor = randomColor;
    }
    // ตั้งค่าให้เปลี่ยนสีทุก 0.5 วินาที
    setInterval(changeBackgroundColor, 500);

    // --- ทำให้ช่องรหัสผ่านพิมพ์ไม่ได้ (เปลี่ยนตัวอักษร) ---
    // ส่วนนี้ถูกคอมเมนต์ออก เพื่อให้พิมพ์รหัสผ่านได้จริง
    // passwordInput.addEventListener('input', (e) => {
    //     const inputChar = e.data;
    //     if (inputChar) {
    //         e.target.value = e.target.value.slice(0, -1) + '😂';
    //     }
    // });

    // --- ทำให้ปุ่มเลื่อนหนีเวลาเอาเมาส์ไปชี้ ---
    loginButton.addEventListener('mouseover', () => {
        // ต้องตรวจสอบให้แน่ใจว่าปุ่มอยู่ในตำแหน่ง 'absolute'
        loginButton.style.position = 'absolute'; 

        const containerRect = loginForm.getBoundingClientRect();
        const buttonWidth = loginButton.offsetWidth;
        const buttonHeight = loginButton.offsetHeight;
        
        // คำนวณตำแหน่งใหม่ภายในขอบเขตของ form
        const newX = Math.random() * (containerRect.width - buttonWidth);
        const newY = Math.random() * (containerRect.height - buttonHeight);

        loginButton.style.left = `${newX}px`;
        loginButton.style.top = `${newY}px`;
    });

    // --- เมื่อกดปุ่มเข้าสู่ระบบ ---
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // ป้องกันการรีเฟรชหน้าเว็บ

        // ตรวจสอบชื่อผู้ใช้และรหัสผ่าน
        if (usernameInput.value === correctUsername && passwordInput.value === correctPassword) {
            // ถ้าถูกต้อง, พาไปหน้าเมนู
            window.location.href = 'main_menu.html';
        } else {
            // ถ้าผิด, แสดงข้อความแจ้งเตือนและทำให้ปุ่มขยับ
            message.textContent = 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง';
            message.style.color = 'red';
            
            // ทำให้ปุ่มขยับเมื่อกดผิด
            const containerRect = loginForm.getBoundingClientRect();
            const buttonWidth = loginButton.offsetWidth;
            const buttonHeight = loginButton.offsetHeight;
            
            loginButton.style.position = 'absolute';
            loginButton.style.left = `${Math.random() * (containerRect.width - buttonWidth)}px`;
            loginButton.style.top = `${Math.random() * (containerRect.height - buttonHeight)}px`;
            
            // ทำให้ช่องรหัสผ่านว่างเปล่า
            passwordInput.value = '';
        }
    });
});
