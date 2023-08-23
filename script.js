const grid = document.querySelector('.grid');
const body = document.querySelector('body');

let mouseDown; 
document.addEventListener('mousedown', 
    function() {
        mouseDown = true;
    }
);
document.addEventListener('mouseup',
    function() {
        mouseDown = false; 
    }
);

for (let i = 0; i < 4; i++) {
    let container = document.createElement('div');
    container.classList.add('container');
    container.id = i;
    for (let j = 0; j < 4; j++) {
        let div = document.createElement('div');
        div.id = "(" + i + "," + j + ")";
        div.classList.add('child');
        container.appendChild(div);
        div.style.height = "240px";
        div.style.width = "240px";
        div.addEventListener('mouseenter', 
            function() {
                if (mouseDown) {
                    div.style.background = "black";
                }
            }
        );
        div.addEventListener('click', 
            function() {
                div.style.background = "black"; 
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
        squares[i].style.background = "white";
    }
};

function changeSize() {
    let squares = document.querySelectorAll('.container');
    for (let i = 0; i < squares.length; i++) {
        squares[i].remove();
    }
    let newSize = prompt("Enter a new size: ");
    while (newSize <= 0 || newSize > 100) {
        newSize = prompt("Please enter a number greater than 0 and less than or equal to 100: ");
    }
    for (let i = 0; i < newSize; i++) {
        let container = document.createElement('div');
        container.classList.add('container');
        container.id = i;
        for (let j = 0; j < newSize; j++) {
            let div = document.createElement('div');
            div.id = "(" + i + "," + j + ")";
            div.classList.add('child');
            container.appendChild(div);
            let divSize = Math.round(960 / newSize);
            div.style.height = divSize + "px";
            div.style.width = divSize + "px";
            div.addEventListener('mouseenter', 
                function() {
                    if (mouseDown) {
                        div.style.background = "black";
                    }
                }
            );
            div.addEventListener('click', 
                function() {
                    div.style.background = "black"; 
                }
            );
        }
        grid.appendChild(container);
    }
};

resetButton.addEventListener('click',
    function() {
        clearSquares();
    }
);

resetSize.addEventListener('click',
    function () {
        changeSize(); 
    }
);