

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
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "black";
        })
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
        console.log("too many squares")
    }
};

