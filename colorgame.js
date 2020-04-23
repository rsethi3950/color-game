var numSquares = 6;
var colors = [
"rgb(0, 0, 250)",
"rgb(0, 250, 0)",
"rgb(250, 0, 0)",
"rgb(250, 250, 0)",
"rgb(250, 0, 250)",
"rgb(0, 250, 250)",
]
var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var btn = document.querySelectorAll("bttn");
var h1 = document.querySelector("h1");
var resetbtn = document.querySelector("#reset");
var mode = document.querySelectorAll(".button");

colorDisplay.textContent = pickedColor;
//function squareSetUp(){
   for(var i = 0; i<squares.length; i++){
   	modeSetUp();
 	squares[i].style.background = colors[i];
 	squares[i].addEventListener("click",function(){
 		var clickedColor= this.style.background;
 		if(clickedColor=== pickedColor){
 			messageDisplay.textContent= "Correct!";
 			changeColors(clickedColor);
 			h1.style.background= clickedColor;
 			resetbtn.textContent= "PLAY AGAIN!";
 			reset();
 		}
 		else{
 			this.style.backgroundColor= "#232323";
 			messageDisplay.textContent= "Try again!";	
 		}
 	});
 }
//}
 
 function changeColors(color){
 	for(var i= 0; i<squares.length; i++){
 		squares[i].style.background= color;
 	}
 }
 
 function reset(){
 	resetbtn.addEventListener("click",function(){
 		colorDisplay.textContent = pickedColor;
        this.textContent = "new colors";
        h1.style.background = "steelblue";
        messageDisplay.textContent = " ";
        //squareSetUp();
        for(var i = 0; i<squares.length; i++){
 	squares[i].style.background = colors[i];
 	squares[i].addEventListener("click",function(){
 		var clickedColor= this.style.background;
 		if(clickedColor=== pickedColor){
 			messageDisplay.textContent= "Correct!";
 			changeColors(clickedColor);
 			h1.style.background= clickedColor;
 			resetbtn.textContent= "PLAY AGAIN!";
 			reset();
 			modeSetUp();
 		}
 		else{
 			this.style.backgroundColor= "#232323";
 			messageDisplay.textContent= "Try again!";	
 		}
 	});
 }
 	});
 }
function modeSetUp(){
	for(var i=0; i<mode.length;i++){
		mode[i].addEventListener("click",function(){
			this.textContent === "easy"? numSquares = 3 : numSquares = 6;
			mode[0].classList.remove("selected");
		    mode[1].classList.remove("selected");
			this.classList.add("selected");
			for(var j=0;j<squares.length; j++){
				if(j< numSquares){
					squares[j].style.display= "block";
					squares[j].style.background= colors[j];
				}
				else{
					squares[j].style.display= "none";
				}
			}
		});
	}
}