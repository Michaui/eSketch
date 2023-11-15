
//default color until overwrite
let color = "black";

// Necessery for colorSquare and 
let click = true; 


function mainBoard(size){

    let board = document.querySelector('.board');
    // take all created divs and delete while user changed (onChange) size variable.(look inspector)
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());

    // Only creates a grid (16x16, 1fr) -> It is nothing to see, because only structured (Look: inspector) 
    // board.style.gridTemplateColumns = 'repeat(16, 1fr)' - automatic change to computedStyleMap 
    // ``Zeichen für das setzen der $-Variable
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    // Amount of squares
    let amount = size * size;

    //Create DIV´s to fill; OLD: 256 = 16 x 16; 
    for (let i = 0; i < amount; i++){
        let square = document.createElement('div');
        // Set from red to white-Board. 
        square.style.backgroundColor = 'white'; 
        // board.appendChild(squere);
        // methode: beforebegin, afterbegin, beforeend, afterend
        board.insertAdjacentElement("beforeend",square); 
        // Set EventListener for hover coloring
        // change stlye background to colorSquare function
        // colorSquare starts only if it is necessary (Callback Function) 
        square.addEventListener("mouseover", colorSquare
        // () => {
        //     square.style.backgroundColor = "black";
        // }
        )
    }
};


// Default Argument
mainBoard(16);

// If user change value of Range-Input function starts. 
function changeSize(input){
    document.getElementById('rangeValue').innerHTML = input;
    if(input >= 2 || input <= 100){
        mainBoard(input);
    // Clear edge Cases
    } else {
        document.querySelector(`.mode`).textContent = "Please select more than 2";
    }
};


// .this in this case (div) 
function colorSquare() {
    // If true pointer draw. 
    if (click) {
        // this.style.backgroundColor = color;
        // If color Var. is no color, set a random color. 
        if(color === 'random'){
            //!! USE IN CSS DEF. ANFÜHRUNGSZEICHEN INSTAD OF BACKSTICKS ''
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        }else {
            this.style.backgroundColor = color; 
        }
    }
}

//If user choose new one - overwrite last color choice/default state
function changeColor(choice){
    color = choice; 
}

function resetBoard(){
    let board = document.querySelector('.board');   
    let squares = board.querySelectorAll('div');
    // Change color to white instad of div.remove() 
    squares.forEach((div) => div.style.backgroundColor = "white");
}


//If clicked set false, if false set to true. 
// Parent to coloSquare
document.querySelector("body").addEventListener("click", (e) => {
    // If target is not a button. 
    // only works with `BUTTON` -> NOT `button` or something else. 
    if(e.target.tagName != `BUTTON`){
        click = !click; 
        if (click) {
             document.querySelector(`.mode`).textContent = "Mode: Coloring";
        } else {
            document.querySelector(`.mode`).textContent = "Mode: Not Coloring";
        };
    }
});


// !! BODY TRACK EVERY CLICK ALSO ON BTNs. SO NEED TO TRACK EVENT WITH e.target.
// TAKE A LOOK ABVOE. 
//If clicked set false, if false set to true. 
// Parent to coloSquare
// document.querySelector("body").addEventListener("click", () => {     
    // click = !click; 
    // if (click) {
    //      document.querySelector(`.mode`).textContent = "Mode: Coloring";
    // } else {
    //     document.querySelector(`.mode`).textContent = "Mode: Not Coloring";
    // };
// });