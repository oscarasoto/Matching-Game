var numberOfFaces = 5;
var theLeftSide = document.getElementById("leftSide");
var theBody = document.getElementById("theBody");


// Game function, generate faces
function generateFaces() {

    for (var control = 1; control <= numberOfFaces ; control++ ){
        createElement();
    }

    deleteLast(theLeftSide);

    // Event handler function to the extra face
    theLeftSide.lastChild.onclick = function nextLevel(event){

        event.stopPropagation();
        numberOfFaces += 5;
        delete_all_children();
        generateFaces();
    };
}

function createElement (){

    var topx = Math.floor( (Math.random() * 400) );
    var leftx = Math.floor( (Math.random() * 400) );
    var newImage = document.createElement("img");
    newImage.src="smile.png";
    newImage.style.top = topx+ "px";
    newImage.style.left = leftx + "px";
    theLeftSide.appendChild(newImage);
}

// Delete all children on both sides
function delete_all_children() {
    var theRightSide = document.getElementById("rightSide");
    var theLeftSide = document.getElementById("leftSide");

    while (theRightSide.firstChild) {
        theRightSide.removeChild(theRightSide.firstChild)
    }
    while (theLeftSide.firstChild) {
        theLeftSide.removeChild(theLeftSide.firstChild)
    }
}

//Clone left side, delete last child, and then copy to the right side
function deleteLast (theLeftSide) {
    var theRightSide = document.getElementById("rightSide");
    var leftSideImages = theLeftSide.cloneNode(true);
    leftSideImages.removeChild(leftSideImages.lastChild);
    theRightSide.appendChild(leftSideImages);

}

//Reset button so the users don't have to reload the page to play again.
reset.onclick = function resetGame (){
    location.reload();
};

// Event handler function to the body
theBody.onclick = function gameOver() {

    alert("Game Over!");
    theBody.onclick = null;
    theLeftSide.lastChild.onclick = null;
};

