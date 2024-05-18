function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controls = document.querySelector('#controls');
const input = controls.querySelector('input');
const createButton = controls.querySelector('button[data-create]');
const destroyButton = controls.querySelector('button[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

createButton.addEventListener('click', () => {
    const amount = parseInt(input.value);
    if (amount >= 1 && amount <= 100) {
        createBoxes(amount);
        input.value = ''; // Очищуємо інпут після створення
    } else {
        alert('Please enter a number between 1 and 100');
    }
});

destroyButton.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
    destroyBoxes(); // Очищуємо попередні елементи

    const boxesFragment = document.createDocumentFragment();
    for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        const size = 30 + i * 10;
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomHexColor();
        box.style.margin = '5px';
        boxesFragment.appendChild(box);
    }
    boxesContainer.appendChild(boxesFragment);
}

function destroyBoxes() {
    boxesContainer.innerHTML = ''; // Очищуємо контейнер
}