
// Creates the grid of divs
function createDivs(gridCount){
    for(let i = 0; i < gridCount; i++){
        for(let j = 0; j < gridCount; j++){
            let div = document.createElement("div");
            let size = document.getElementById("container").clientWidth;
            div.style.backgroundColor = "white";
            div.style.width = `${size/gridCount}px`;
            div.style.height = `${size/gridCount}px`;
            div.classList.add("div-boi");
            document.getElementById("container").appendChild(div);
        }
    }
}

//Removes all divs (used when changing grid size)
function removeAllDivs(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

createDivs(16);

const container = document.querySelector('#container');
let allDivs = document.querySelectorAll(".div-boi");
let blackRadioButton = document.querySelector("#black-color");
let rainbowRadioButton = document.querySelector("#rainbow-color");
let newGridButton = document.querySelector("#new-grid");

// Event listener that checks to see if "NEW GRID" button was clicked
newGridButton.addEventListener('click', () => {
    removeAllDivs(container);
    let gridSize = 0;
    while(gridSize > 40 || gridSize < 1 || gridSize === null || typeof(gridSize) != "number" || isNaN(gridSize)){
        gridSize = parseInt(prompt("Enter a number for the grid size < 40 \ni.e. '16' would give a 16x16 grid", 16));
    }
    createDivs(gridSize);
});

// Event listener to see if the black radio button has been selected (and wasn't already selected)
blackRadioButton.addEventListener('change', () => {
    let allDivs = document.querySelectorAll(".div-boi");
    allDivs.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.backgroundColor = "black";
        });
    });
});

// Event listener to see if the rainbow radio button has been selected (and wasn't already selected)
rainbowRadioButton.addEventListener('change', () => {
    let allDivs = document.querySelectorAll(".div-boi");
    allDivs.forEach(element => {
        element.addEventListener('mouseenter', () => {
            let red = Math.round(Math.random() * 255);
            let green = Math.round(Math.random() * 255);
            let blue = Math.round(Math.random() * 255);
            element.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        });
    });
});