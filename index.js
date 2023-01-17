const drawScreen = document.querySelector('.drawScreen');
let input = document.querySelector('input');
let numSelection = input.value;
const confirmSize = document.getElementById('confirm');

confirmSize.addEventListener('click', createGrid);

function createGrid() {
    numSelection = input.value;
    drawScreen.style.gridTemplateColumns = `repeat(${numSelection}, 1fr)`;
    for(let i = 0;i < numSelection*numSelection;i++){
        const square = document.createElement('div');
        square.classList.add('box');
        drawScreen.appendChild(square);
    }
}