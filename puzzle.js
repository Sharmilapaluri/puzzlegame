var rows = 5;
var columns = 5;

var currTile;
var otherTile;
var isSolved = false;
var turns = 0;
var ans = "25242322212019181716151413121110987654321";
var input = "";

window.onload = function() {
    let board = [];
	for (let i=1; i <= rows*columns; i++) {
        board.push(i.toString());
    }
    for (let c = 0; c < columns; c++) {
        for (let r = 0; r < rows; r++) {
            let tile = document.createElement("img");
            tile.src = "C:/Users/sharmila/OneDrive/Desktop/images/blank.jpg";
		tile.val = r*rows + c + 1;
            tile.addEventListener("dragstart", dragStart); 
            tile.addEventListener("dragover", dragOver);   
            tile.addEventListener("dragenter", dragEnter); 
            tile.addEventListener("dragleave", dragLeave); 
            tile.addEventListener("drop", dragDrop);       
            tile.addEventListener("dragend", dragEnd);  

            document.getElementById("board").append(tile);
        }
    }
    
    let tile = document.createElement("img");
    tile.src = "C:/Users/sharmila/OneDrive/Desktop/images/32851.jpg";
    document.getElementById("board2").append(tile);

    let pieces = [];
    for (let i=1; i <= rows*columns; i++) {
        pieces.push(i.toString());
    }
    pieces.reverse();
    

    for (let i = 0; i < pieces.length; i++) {
        let tile = document.createElement("img");
        tile.src = "C:/Users/sharmila/OneDrive/Desktop/images/" + pieces[i] + ".jpg";
	  tile.val = pieces[i];

        tile.addEventListener("dragstart", dragStart); 
        tile.addEventListener("dragover", dragOver);   
        tile.addEventListener("dragenter", dragEnter); 
        tile.addEventListener("dragleave", dragLeave); 
        tile.addEventListener("drop", dragDrop);       
        tile.addEventListener("dragend", dragEnd);

        document.getElementById("pieces").append(tile);
    }
    document.getElementById("mybtn").addEventListener("click", checkright);
    
   
}

function dragStart() {
    currTile = this; 
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {

}

function dragDrop() {
    otherTile = this; 
}

function dragEnd() {
    if (currTile.src.includes("blank")) {
        return;
    }
    let currImg = currTile.src;
    let otherImg = otherTile.src;
    let currVal = currTile.val;
    let otherVal = otherTile.val;
    currTile.src = otherImg;
    otherTile.src = currImg;
    if (currVal == otherVal) {
        input = input + currTile.val;
    }
    console.log(input);
    
    turns += 1;
    document.getElementById("turns").innerText = turns;
}

function checkright () {
	if (input == ans) {
		isSolved = true;
	}
	if (isSolved) {
		window.location.href = "C:/Users/sharmila/OneDrive/Desktop/elitmus/clue2.html";
	}	
}