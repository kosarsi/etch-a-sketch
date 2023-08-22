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

const reset = document.querySelector('.reset');
const size = document.querySelector('.size');

