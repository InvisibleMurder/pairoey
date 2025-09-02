document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const loginButton = document.querySelector("button");
  const message = document.getElementById("message");
  const passwordInput = document.getElementById("password");
  const body = document.body;

  let clickCount = 0; // ตัวแปรสำหรับนับจำนวนครั้งที่กด
  const prankMessages = [
    "Incorrect password. Try again.",
    "Seriously, what are you even trying to type?",
    "This is hopeless. You are not getting in.",
    "Give up. This is a trap.",
    "I already told you. This is a trap! Go do something else.",
    "You are a persistent one, I'll give you that. But no.",
    "This game is not for you. Find another one.",
    "Do you really think it's going to work this time?",
    "I am impressed by your dedication, but also a little worried.",
    "Fine. You win. Now get out of here.",
  ];

  // ฟังก์ชันสำหรับเปลี่ยนสีพื้นหลังแบบสุ่ม
  function changeBackgroundColor() {
    const randomColor =
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");
    body.style.backgroundColor = randomColor;
  }

  // ตั้งค่าให้เปลี่ยนสีทุก 0.5 วินาที
  setInterval(changeBackgroundColor, 500);

  // ทำให้ช่องรหัสผ่านพิมพ์ไม่ได้ (เปลี่ยนตัวอักษร)
  passwordInput.addEventListener("input", (e) => {
    const inputChar = e.data;
    if (inputChar) {
      e.target.value = e.target.value.slice(0, -1) + "😂";
    }
  });

  // ทำให้ปุ่มเลื่อนหนีเวลาเอาเมาส์ไปชี้
  loginButton.addEventListener("mouseover", () => {
    const buttonWidth = loginButton.offsetWidth;
    const buttonHeight = loginButton.offsetHeight;
    const containerWidth = loginForm.offsetWidth;
    const containerHeight = loginForm.offsetHeight;

    const newX = Math.random() * (containerWidth - buttonWidth);
    const newY = Math.random() * (containerHeight - buttonHeight);

    loginButton.style.position = "absolute";
    loginButton.style.left = `${newX}px`;
    loginButton.style.top = `${newY}px`;
  });

  // เมื่อกดปุ่มเข้าสู่ระบบ
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault(); // ป้องกันการรีเฟรชหน้าเว็บ
    clickCount++;

    // แสดงข้อความกวนประสาท
    if (clickCount <= prankMessages.length) {
      message.textContent = prankMessages[clickCount - 1];
    } else {
      message.textContent =
        "Okay, this is getting ridiculous. There is no winning. Just stop.";
    }

    // ทำให้ช่องรหัสผ่านว่างเปล่า
    passwordInput.value = "";
  });
});
