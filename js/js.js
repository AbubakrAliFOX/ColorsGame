let numSquares = 6;

let colors = generateRandomColor(numSquares);

let message = document.getElementById("message");

let h1 = document.querySelector("h1");

let correct = document.getElementById("correct");
// Assigning colors and functionality to the colorSquares.
let colorSquare = document.querySelectorAll(".colorSquare");

for(let i = 0; i < colors.length; i++) {
    // Assign initial colors to each square
    colorSquare[i].style.backgroundColor = colors[i];

    // Add click listerners to squares
    colorSquare[i].addEventListener("click" , function () {
        //compare color to picked color
        let clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor) {
            message.textContent = "Correct";
            changeAllColors(clickedColor)
            h1.style.background = pickedColor;
            reset.textContent = "Play Again?"
            correct.play();
        } else {
            message.textContent = "Try again";
            this.style.backgroundColor = "#1B1B1B";
        }
    })
}

let pickedColor = randomColor();
let colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;

function changeAllColors (color) {
    for(let i = 0; i < colorSquare.length; i++) {
        colorSquare[i].style.backgroundColor = color;  
    }
}

function randomColor () {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColor (num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(randomColorRGB())
    }
    return arr;
}

function randomColorRGB () {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`
}

// New game
let reset = document.getElementById("reset");

reset.addEventListener("click", function () {
    resetFunc();
})

let hard = document.getElementById("hard");
let easy = document.getElementById("easy");

hard.addEventListener("click", function () {
    hard.classList.add("selected");
    easy.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColor(numSquares);
    pickedColor = randomColor();
    colorDisplay.textContent = pickedColor;
    for(let i = 0; i < colorSquare.length; i++) {
        colorSquare[i].style.background = colors[i];
        colorSquare[i].style.display = "block";
    }
    this.style.backgroundColor = "cadetblue";
    this.style.color = "white";
    easy.style.color = "cadetblue";
    easy.style.backgroundColor = "white";

})

easy.addEventListener("click", function () {
    easy.classList.add("selected");
    hard.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColor(numSquares);
    pickedColor = randomColor();
    colorDisplay.textContent = pickedColor;
    for(let i = 0; i < colorSquare.length; i++) {
		if(colors[i]) {
			colorSquare[i].style.background = colors[i];
		} else {
			colorSquare[i].style.display = "none";
		}
    }
    this.style.backgroundColor = "cadetblue";
    this.style.color = "white";
    hard.style.color = "cadetblue";
    hard.style.backgroundColor = "white";
})

function resetFunc () {
    colors = generateRandomColor(numSquares);
    pickedColor = randomColor();
    colorDisplay.textContent = pickedColor;
    for(let i = 0; i < colorSquare.length; i++) {
        if(colors[i]) {
            colorSquare[i].style.display = "block";
            colorSquare[i].style.backgroundColor = colors[i]; 
        } else {
            colorSquare[i].style.display = "none";
        }
    }
    h1.style.background = "cadetblue";
    reset.textContent = "New Game"; 
    message.textContent = "";
}

let play = document.getElementById("play");
play.addEventListener("click", function () {
    document.querySelector(".mainModel").style.display = "none";
    document.querySelector(".gameBody").style.opacity = "1";
    document.querySelector("footer").style.opacity = "1";

})