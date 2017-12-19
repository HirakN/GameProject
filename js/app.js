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
		$(".box").one("click", function() {
			console.log("Click!");
			reveal(this);
		});
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

	makeGrid();
	addListeners();
});
	