// Show number of bombs on map
// Add life
// Add pickups
// - Lantern, illuminates tiles around you
// - HP Up
// Move number
// Take keypresses

// if statement checking adjacent cells
/*
	_|_|_|_
	_|_|_|_
	_|_|_|_
	 | | | 
*/

$(document).ready(function() {

	var clearChance = 0.6;
	var currentBox = 0;

	function makeGrid() {
		// Starting point
		var div = $('<div class = "0" id="start-box"></div>');
		$("#game-container").append(div);
		for (var i = 1; i < 35; i++) {
			var div = $('<div  class="' + i + ' box"></div>');
			$("#game-container").append(div);
		}
		// Finish line
		var div = $('<div class="35" id="end-box"></div>');
		$("#game-container").append(div);
	}

	function addListeners() {
		$(".box").click(function() {
			// reutrns string boxid number
			var buttonClass = $(this).attr("class");
			// returns integer version of boxid number
			buttonClass = parseInt(buttonClass);

			if ( isAdjacent(buttonClass) ) {
				console.log("currentbox: "+ currentBox);
				reveal(this);
				currentBox = buttonClass;
			}
		});

		$("end-box").click(function() {
			var buttonClass = $(this).attr("class");
			// returns integer version of boxid number
			buttonClass = parseInt(buttonClass);

			if ( isAdjacent(buttonClass) ) {
				console.log("Click adjacent!");
				currentBox = buttonClass;
				console.log("currentbox: "+ currentBox);
			}
		})

	}
 
	function reveal(box) {
		var rand = Math.random();
		if (rand < clearChance) {
			box.innerHTML = "";
			$(box).css("background-color","Linen");
		} else {
			box.innerHTML = "Hazard";
		}
	}

	function adjacentBoxes(boxid) {
		var adjacentBoxes = [];

		adjacentBoxes.push(boxid += 1);
		adjacentBoxes.push(boxid += 5);
		adjacentBoxes.push(boxid += 6);
		adjacentBoxes.push(boxid += 7);
		adjacentBoxes.push(boxid -= 1);
		adjacentBoxes.push(boxid -= 5);
		adjacentBoxes.push(boxid -= 6);
		adjacentBoxes.push(boxid -= 7);
		return adjacentBoxes;
	}

	function isAdjacent(boxid) {
		adjArray = adjacentBoxes(currentBox)
		if(adjArray.includes(boxid)) {
			return true;
		} else {
			return false;
		}
	}

	makeGrid();
	addListeners();
});
	