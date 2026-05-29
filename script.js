const btn = document.getElementById('chaos-btn');

btn.addEventListener('click', () => {
    document.body.style.filter = 'invert(1)';
    setTimeout(() => {
        document.body.style.filter = 'none';
        alert("بيل يرى كل شيء الآن...");
    }, 500);
});
