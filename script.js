
function buildBoard() {
    let board = document.querySelector(".board");
    board.style.display = "grid";


    let cells = document.querySelectorAll(".board .space");
    let changerows = [false, false, true, false, true];
    let changecols = [false, true, false, true, false];


    let rowdirection = [0, 0, -1, 0, 1];
    let coldirection = [0, 1, 0, -1, 0];
    let cellrotation = [0, 0, 270, 180, 90];
    let cornerrotation = [45, 315, 235, 135];

    let noofcornerencountered = 0;

    let rowstart = 10, rowend = 11;
    let colstart = 1, colend = 2;

    for (let index = 0; index < cells.length; index++) {
        const element = cells[index];
        
        if (changerows[noofcornerencountered]) {
             rowstart = rowstart + rowdirection[noofcornerencountered];
             rowend = rowstart + 1;
        }

        if (changecols[noofcornerencountered]) {
            colstart = colstart + coldirection[noofcornerencountered];
            colend = colstart + 1;
        }

        element.style.gridRow = rowstart + " / " + rowend;
        element.style.gridColumn = colstart + " / " + colend;

        element.querySelector(".container").style.transform = `rotate(${cellrotation[noofcornerencountered]}deg)`;

        if (element.classList.contains("corner")) {
            element.querySelector(".container").style.transform = `rotate(${cornerrotation[noofcornerencountered]}deg)`;
            noofcornerencountered = noofcornerencountered+1;
        }
    }
}


buildBoard();