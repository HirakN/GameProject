
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
	var lifeChance = 0.1;
	var currentBox = 0;	
	var playerLife = 3;
	var gridSize = 7;

	function makeGrid() {
		// Starting point
		var div = $('<div class = "0" id="start-box"></div>');
		$("#game-container").append(div);
		for (var i = 1; i < 48; i++) {
			var div = $('<div  class="' + i + ' box"></div>');
			$("#game-container").append(div);
		}
		// Finish line
		var div = $('<div class="48" id="end-box"></div>');
		$("#game-container").append(div);
	}

	function addListeners() {
		$(".box").click(function() {
			// reutrns string boxid number
			var buttonClass = $(this).attr("class");
			// returns integer version of boxid number
			buttonClass = parseInt(buttonClass);
			console.log("clicked " + buttonClass)

			if ( isAdjacent(buttonClass) ) {
				reveal(this);
				currentBox = buttonClass;
				console.log("currentbox: " + currentBox);
			} else {
				console.log("currentbox: " + currentBox);
			}
		});

		$("#end-box").click(function() {
			var buttonClass = $(this).attr("class");
			// returns integer version of boxid number
			buttonClass = parseInt(buttonClass);
			console.log("clicked " + buttonClass)

			if ( isAdjacent(buttonClass) ) {
				alert("You Win!");
				console.log("Click adjacent!");
				currentBox = buttonClass;	
				console.log("currentbox: "+ currentBox);
				$("div").off("click");
			} else {
				console.log("Not clicked");
			}
		})

		$("#lantern").click(function() {
			var lantArray = adjacentBoxes(currentBox);
		});

	}
 
	function reveal(box) {
		var rand = Math.random();
		if (rand < clearChance) {
			var rand2 = Math.random();
			if (rand2 < 0.2) {
				box.innerHTML = '<img src="https://cdn.pixabay.com/photo/2016/08/29/13/55/heart-1628313_960_720.png" width="100%"></img>';
				$(box).css("background-color", "Linen");
				playerLife++;
				setTimeout(function() {
					lifeCheck();
				},100);
			} else {
				box.innerHTML = "";
				$(box).css("background-color", "Linen");
			}
		} else {
			box.innerHTML = '<img src="https://d30y9cdsu7xlg0.cloudfront.net/png/4948-200.png" width="100%"></img>';
			$(box).css("background-color", "Linen");
			playerLife--;
			setTimeout(function() {
					lifeCheck();
			},100);
		}
	}

	function lifeCheck() {
		if (playerLife >= 1) {
			alert('You have ' + playerLife + ' lives remaining...');
		} else {
			alert('You are dead, game over');
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

	makeGrid();
	addListeners();
});
	