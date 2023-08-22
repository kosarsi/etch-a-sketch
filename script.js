const grid = document.querySelector('.grid');
const body = document.querySelector('body');

for (let i = 0; i < 4; i++) {
    let container = document.createElement('div');
    container.classList.add('container');
    container.id = i;
    for (let j = 0; j < 4; j++) {
        let div = document.createElement('div');
        div.id = "(" + i + "," + j + ")";
        div.classList.add('child');
        container.appendChild(div);
        div.addEventListener('mouseover', 
            function() {
                div.setAttribute('style', 'background: black;');
            }
        );
    }
    grid.appendChild(container);
}

const resetButton = document.querySelector('.reset');
const resetSize = document.querySelector('.size');

function clearSquares() {
    let squares = document.querySelectorAll('.child');
    for (let i = 0; i < squares.length; i++) {
        squares[i].setAttribute('style', 'background: white;');
    }
};

resetButton.addEventListener('click',
    function() {
        clearSquares();
    }
);