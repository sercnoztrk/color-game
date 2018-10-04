var numbSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.getElementById("messageDisplay");
var heading = document.getElementsByTagName("h1")[0];
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    for (let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numbSquares = 3 : numbSquares = 6;
            reset();
        })
    }
    
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function(){
            if (this.style.backgroundColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                changeColor(pickedColor);
                heading.style.background = pickedColor;
                resetButton.textContent = "Play Again?";
            }
            else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again!";
            }
        });
    }

    reset();
}



function reset() {
    colors = generateRandomColors(numbSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;    
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    if (numbSquares === 3) {
        for (let i = 3; i < 6; i++) {
            squares[i].style.display = "none" ;
        }
    }
    else {
        for (let i = 3; i < 6; i++) {
            squares[i].style.display = "block" ;
        }
    }
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    heading.style.background = "steelblue";
}

resetButton.addEventListener("click", function(){
    reset();
});

function changeColor(color){
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
        
    }
}

function pickColor() {
    var randomNumber = Math.floor(Math.random() * colors.length);
    console.log(randomNumber);
    return colors[randomNumber];
}

function generateRandomColors(num) {
    var arr = [];
    for (let i = 0; i < num; i++) {
        arr[i] = randomColor();
    }
    return arr;
}

function randomColor() {
    var color = "rgb(0, 0, 0)";
    var rgb = [];
    for (let i = 0; i < 3; i++) {
        rgb[i] = Math.floor(Math.random() * 256);
    }
    color = "rgb(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ")";
    return color;
}