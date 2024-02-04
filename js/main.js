const numbers = document.querySelector('.numbers');

for (let i = 0; i < 9; i++) {
    const number = document.createElement('div');
    number.textContent = (i + 1);
    number.classList.add('number');
    numbers.appendChild(number);
}
