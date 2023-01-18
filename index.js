const drawScreen = document.querySelector('.drawScreen');
let input = document.querySelector('input');
let numSelection = input.value;
const confirmSize = document.getElementById('confirm');
const erase = document.getElementById('eraser');
const pin = document.getElementById('pin')
let draw = true;

let box = document.getElementsByClassName('box')

confirmSize.addEventListener('click', createGrid);
erase.addEventListener('click', changeMode);
pin.addEventListener('click', changeMode);

function createGrid() {
    numSelection = input.value;
    document.querySelectorAll('.box').forEach(e => e.remove());
    drawScreen.style.gridTemplateColumns = `repeat(${numSelection}, 1fr)`;
    for(let i = 0;i < numSelection*numSelection;i++){
        const square = document.createElement('div');
        square.classList.add('box');
        drawScreen.appendChild(square);
        square.addEventListener('mouseover', () => {
            if(draw) {square.style.backgroundColor = "black"}
            else if(!draw) {square.style.backgroundColor = "#e5eaf5"}
        });
    }
}

function changeMode() {
    if(draw) draw = false;
    else if(!draw) draw = true;
}