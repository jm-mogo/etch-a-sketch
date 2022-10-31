const grid = document.querySelector(".grid");
let color = "black";
let size = 16;


function setUpGrid(size) {
    grid.innerHTML = ''
    grid.style = `grid-template-rows: repeat(${size}, 1fr)`;
    grid.style = `grid-template-columns: repeat(${size}, 1fr)`;
    
    for (let i= 0; i < size * size ; i++) {
        let gridElement = document.createElement('div');

        gridElement.classList.add("grid-div")
        grid.addEventListener('mouseover', paintDiv)
        grid.appendChild(gridElement);
        
    }
}

function paintDiv(e) {
    if (color === 'random') {
        e.target.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        e.target.style.backgroundColor = color
    }
    
}
function changeColor(newColor) {
    color = newColor;

}

function changeSize(input) {
    if (input >= 2 && input <= 100) {
        setUpGrid(input);
        size = input;
    }

}

function resetGrid() {
    setUpGrid(size)
}

setUpGrid(size)