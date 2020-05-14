//Variables
var numOfSquares = 6;
var colors = [];
var pickedColor;

//Selectors
var squares = document.querySelectorAll(".square");
var rgbDisplayTitle = document.getElementById("rgbDisplayTitle");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetGameButton = document.getElementById("resetGameButton");
//var easyBtn = document.getElementById("easyBtn");
//var hardBtn = document.getElementById("hardBtn");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  setupModeButtons();
  setupSquareListeners();
  reset();
}

function reset() {
  //generate all colors
  colors = generateRandomColors(numOfSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //change colors
  rgbDisplayTitle.textContent = pickedColor;
  //change all colors of squares
  for (var x = 0; squares.length > x; x++) {
    //Add initial color to squares
    squares[x].style.backgroundColor = colors[x];
  }
  resetGameButton.textContent = "New Colors";
  h1.style.backgroundColor = "steelblue";
  messageDisplay.textContent = "";
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
}

//Reset Button Event Listener
resetGameButton.addEventListener("click", function () {
  // //generate all colors
  // colors = generateRandomColors(numOfSquares);
  // //pick a new random color from array
  // pickedColor = pickColor();
  // //change colors
  // rgbDisplayTitle.textContent = pickedColor;
  // //change all colors of squares
  // for (var x = 0; squares.length > x; x++) {
  //   //Add initial color to squares
  //   squares[x].style.backgroundColor = colors[x];
  // }
  // resetGameButton.textContent = "New Colors";
  // h1.style.backgroundColor = "steelblue";
  // messageDisplay.textContent = "";
  reset();
});

//Easy Button Event Listener
// easyBtn.addEventListener("click", function () {
//   hardBtn.classList.remove("selected");
//   easyBtn.classList.add("selected");
//   numOfSquares = 3;
//   colors = generateRandomColors(numOfSquares);
//   pickedColor = pickColor();
//   rgbDisplayTitle.textContent = pickedColor;
//   //Hiding and showing only 3 div with class .squares
//   for (var i = 0; i < squares.length; i++) {
//     if (colors[i]) {
//       squares[i].style.backgroundColor = colors[i];
//     } else {
//       squares[i].style.display = "none";
//     }
//   }
// });
// //Hard Button Event Listener
// hardBtn.addEventListener("click", function () {
//   easyBtn.classList.remove("selected");
//   hardBtn.classList.add("selected");
//   numOfSquares = 6;
//   colors = generateRandomColors(numOfSquares);
//   pickedColor = pickColor();
//   rgbDisplayTitle.textContent = pickedColor;
//   //Hiding and showing only 3 div with class .squares
//   for (var i = 0; i < squares.length; i++) {
//     squares[i].style.backgroundColor = colors[i];
//     squares[i].style.display = "block";
//   }
// });

function setupModeButtons() {
  //Mode Buttons Event listeners alternative to long code that is hardbutton and easybutton function
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function () {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      //Squares to show
      if (this.textContent === "Easy") {
        numOfSquares = 3;
      } else {
        numOfSquares = 6;
      }
      reset();
      //Pick Colors
      //Pick a new picked color
      //Update page to reflect changes
    });
  }
}

function setupSquareListeners() {
  for (var x = 0; squares.length > x; x++) {
    //Add initial color to squares
    // squares[x].style.backgroundColor = colors[x];
    //Add click listeners to squares
    squares[x].addEventListener("click", function () {
      //Grab color of picked square
      var clickedColorResult = this.style.backgroundColor;
      //Comparing it with picked color
      if (clickedColorResult == pickedColor) {
        messageDisplay.textContent = "Correct!";
        changeColor(clickedColorResult);
        h1.style.backgroundColor = clickedColorResult;
        resetGameButton.textContent = "Play Again?";
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
}

//Changes all the squares to right color
function changeColor(color) {
  //changes all the squares to the correct color if guessed right
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

//Getting a random color
function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

//Generates random colors inside of an array
function generateRandomColors(num) {
  var arrNum = [];
  for (var i = 0; i < num; i++) {
    arrNum.push(randomColor());
  }
  return arrNum;
}

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
