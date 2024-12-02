function attachGradientEvents() {
    const gradientElement = document.getElementById('gradient');
    const resultElement = document.getElementById('result');
    gradientElement.addEventListener('mousemove', (e) => {
        const position = e.offsetX;
        const boxWidth = e.currentTarget.clientWidth;
        const percent = Math.floor((position / boxWidth) * 100);
        resultElement.textContent = `${percent}%`;
    })
}
