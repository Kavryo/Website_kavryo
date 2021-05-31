
var numSquares = 6;
var colors = [];
var pickedColor

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var msgDisplay = document.querySelector("#msg");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init()
{
	setupModeButtons();
	setupSquares();
	reset();
}

function setupSquares()
{
	for(var i = 0; i < squares.length; i++)
    {
		squares[i].addEventListener("click", function()
		{
			var clickedColor = this.style.backgroundColor;
		
			if(clickedColor === pickedColor)
			{
				msgDisplay.textContent = "correct";
				resetButton.textContent = "Play Again?";
				changecolors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			}
			else
			{
				this.style.backgroundColor = "#232323";
				msgDisplay.textContent = "try again";
			}
	
		});
	}

}


function setupModeButtons()
{
	for (var i = 0; i < modeButtons.length; i++) 
	{
		modeButtons[i].addEventListener("click",function()
		{
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
			reset();
		})
	}

}



function reset()
{
	colors = generateRandomColors(numSquares);
	pickedColor = pickcolor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	msgDisplay.textContent = "";
	for (var i = 0; i < squares.length; i++)
	{
	 	if(colors[i])
	 	{
	 		squares[i].style.display = "block";		
	 		squares[i].style.backgroundColor = colors[i];
	 	}
	 	else
	 	{
	 		squares[i].style.display = "none"; 
	 	}

	}
	h1.style.backgroundColor = "steelBlue";

}

resetButton.addEventListener("click",function(){
	reset();
})

for(var i = 0; i < squares.length; i++)
{
	squares[i].addEventListener("click", function()
	{
		var clickedColor = this.style.backgroundColor;
		
		if(clickedColor === pickedColor)
		{
			msgDisplay.textContent = "correct";
			resetButton.textContent = "Play Again?";
			changecolors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		}
		else
		{
			this.style.backgroundColor = "#232323";
			msgDisplay.textContent = "try again";
		}
	
	});
}

function changecolors(color) 
{
	for (var i = 0; i < squares.length; i++)
	{
	 	squares[i].style.backgroundColor = color;
	}
	
}

function pickcolor()
{
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) 
{
	var arr = [];
	for (var i = 0; i < num; i++)
	 {
	 	arr.push(randomColor());
	 }
	return arr;
}

function randomColor() 
{
	var r = (Math.floor(Math.random()*1000))%256;
	var g= (Math.floor(Math.random()*1000))%256;
	var b = (Math.floor(Math.random()*1000))%256; 
	return "rgb(" + r + ", " +g+", " +b+")";
}

