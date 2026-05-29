// تحريك الحدقة مع الماوس
document.addEventListener('mousemove', (e) => {
    const pupil = document.querySelector('.pupil');
    const x = (e.clientX / window.innerWidth) * 40 - 20;
    const y = (e.clientY / window.innerHeight) * 40 - 20;
    pupil.style.transform = `translate(${x}px, ${y}px)`;
});

// فتح بوابة الطائفة
function openDimension() {
    const mainContainer = document.querySelector('.container');
    mainContainer.innerHTML = `
        <h1 style="color: red;">مرحباً بكم في طائفة بيل</h1>
        <p>نحن الذين ننتظر عودة بيل سايفير لإنهاء العالم المادي.</p>
        <div class="cult-form">
            <input type="text" placeholder="أدخل اسمك لتنضم للعهد">
            <button onclick="alert('لقد تم تسجيل روحك في سجلات بيل!')">قدم ولائك</button>
        </div>
        <p>القوانين: <br> 1. بيل هو الحقيقة الوحيدة.<br> 2. الواقع مجرد كذبة.</p>
    `;
    document.body.style.backgroundColor = "#1a0000";
}

