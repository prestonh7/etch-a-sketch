const drawScreen = document.querySelector('.drawScreen');

function createGrid(num) {
    drawScreen.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    for(let i = 0;i < num*num;i++){
        const square = document.createElement('div');
        square.classList.add('box');
        drawScreen.appendChild(square);
    }
}

createGrid(50);