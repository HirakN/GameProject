
// Add pickups
// - Lantern, illuminates tiles around you
// - HP Up
// Move number

// if statement checking adjacent cells
/*
	_|_|_|_
	_|_|_|_
	_|_|_|_
	 | | | 
*/

$(document).ready(function() {

	var clearChance = 0.7;
	var lifeChance = 0.15;

	var currentBox = 0;	
	
	var playerLife = 3;
	var gridSize = 7;
	var hidden = false;
	var moves = 0;
	var score = 0;

	function setUp() {
		var bgmusic = document.getElementById("bg-music");
		bgmusic.volume = 0.2;
		
		makeGrid();
		addListeners();
	}

	function makeGrid() {
		// Starting point
		var div = $('<div class = "0 box" id="start-box"></div>');
		$("#game-container").append(div);
		for (var i = 1; i < 48; i++) {
			var div = $('<div  class="' + i + ' box"></div>');
			$("#game-container").append(div);
		}
		// Finish line
		var div = $('<div class="48 box" id="end-box"></div>');
		$("#game-container").append(div);
	}

	function addListeners() {

		$("#end-box").click(function() {
			var buttonClass = $(this).attr("class");
			// returns integer version of boxid number
			buttonClass = parseInt(buttonClass);
			
			if ( isAdjacent(buttonClass) ) {
				moves++;
				updateMessage("You Win! Your score is " + score);
				currentBox = buttonClass;
				$("div").off("click");
			} else {
				console.log("Not adjacent");
			}
			updateFields();
		})

		$(".box").click(function() {
			// reutrns string boxid number
			$(".box").removeAttr("style").text("");	
			var buttonClass = $(this).attr("class");
			// returns integer version of boxid number
			buttonClass = parseInt(buttonClass);
			console.log("clicked " + buttonClass)
			
			if ( isAdjacent(buttonClass) ) {
				moves++;
				score+=100;
				reveal(this);
				currentBox = buttonClass;
				console.log("currentbox: " + currentBox);
			} else {
				console.log("Not adjacent");
			}
			updateFields();
		});

		

		$("#lantern").click(function() {
			var lantArray = adjacentBoxes(currentBox);
			console.log("lantern array: " + lantArray)
			var box = $(".box"); // array of boxes
			//debugger;
			score+=500;
			for (var i in lantArray) {
				var boxToReveal = lantArray[i];
				reveal(box[boxToReveal]);
			}
			updateFields();
		});

		$("#hide-instr").click(function() {
			if (hidden === false) {
				$("#instructions").hide();
				hidden = true;
			} else {
				$("#instructions").show();
				hidden = false;
			}
		})

	}

	function updateMessage(message) {
		var messageField = $("#message-board");
		messageField.text(message);
	}

	function updateFields() {
		var scoreField = $("#score");
		var lifeField = $("#lives");
		var moveField = $("#moves");

		scoreField.text("Score: " + score);
		lifeField.text("Lives: " + playerLife);
		moveField.text("Moves: " + moves);
	}
 
	function reveal(box) {
		var rand = Math.random();
		// For clear/beneficial tiles
		if (rand < clearChance) {
			var rand2 = Math.random();
			// Chance for clear tile to contain life
			if (rand2 < lifeChance) {
				box.innerHTML = '<img src="https://cdn.pixabay.com/photo/2016/08/29/13/55/heart-1628313_960_720.png" width="100%"></img>';
				$(box).css("background-color", "Linen");
				$("#heart")[0].play();
				playerLife++;
				lifeCheck();
			} else {
				// Tile is clear
				box.innerHTML = "";
				$(box).css("background-color", "Linen");
			}
		} else {
			box.innerHTML = '<img src="https://d30y9cdsu7xlg0.cloudfront.net/png/4948-200.png" width="100%"></img>';
			$(box).css("background-color", "Linen");
			$("#bomb")[0].play();
			playerLife--;
			lifeCheck();
		}
	}

	function lifeCheck() {
		if (playerLife >= 1) {
			updateMessage('You have ' + playerLife + ' lives!');
		} else {
			updateMessage('You are dead, game over! Your score is ' + score);
			$("div").off("click");
		} 
	}

	function adjacentBoxes(boxid) {
		var adjacentBoxes = [];

		adjacentBoxes.push(boxid - gridSize);
		adjacentBoxes.push(boxid - gridSize + 1);
		adjacentBoxes.push(boxid + 1);
		adjacentBoxes.push(boxid + gridSize + 1);
		adjacentBoxes.push(boxid + gridSize);
		adjacentBoxes.push(boxid + gridSize - 1);
		adjacentBoxes.push(boxid - 1);
		adjacentBoxes.push(boxid - gridSize - 1);
		console.log(adjacentBoxes);
		return adjacentBoxes;
	}

	function isAdjacent(boxid) {
		adjArray = adjacentBoxes(currentBox)
		return adjArray.includes(boxid);
	}

	setUp();
});
	