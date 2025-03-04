document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('heroCanvas');
    const ctx = canvas.getContext('2d');
    const items = ['🔥', '🚀', '💡', '🌟', '🎉']; // Array of icons or strings
    let currentIndex = 0;

    function drawItem(item, x, y) {
        ctx.font = '48px sans-serif';
        ctx.fillText(item, x, y);
    }

    function clearCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    function animate() {
        clearCanvas();
        const item = items[currentIndex];
        const x = Math.random() * (canvas.width - 50);
        const y = Math.random() * (canvas.height - 50) + 50;
        drawItem(item, x, y);

        currentIndex = (currentIndex + 1) % items.length;
        setTimeout(animate, 1000); // Change item every second
    }

    animate();
});