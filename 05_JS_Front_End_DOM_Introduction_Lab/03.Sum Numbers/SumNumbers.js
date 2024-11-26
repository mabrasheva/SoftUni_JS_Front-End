function calc() {
    // sum = num1 + num2
    const num1Element = document.getElementById('num1').value;
    const num2Element = document.getElementById('num2').value;
    const sumElement = document.getElementById('sum');
    sumElement.value = Number(num1Element) + Number(num2Element);
}
