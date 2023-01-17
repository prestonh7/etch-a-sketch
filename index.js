const drawScreen = document.querySelector('.drawScreen');
const numSelection = document.getElementById('size').value;
const confirmSize = document.getElementById('confirm');

confirmSize.addEventListener('click', createGrid);

function createGrid(num) {
    num = numSelection;
    drawScreen.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    for(let i = 0;i < num*num;i++){
        const square = document.createElement('div');
        square.classList.add('box');
        drawScreen.appendChild(square);
    }
}