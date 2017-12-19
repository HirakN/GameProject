// Show number of bombs on map
// Add life
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

	var clearChance = 0.65;
	var currentBox = 0;	
	var playerLife = 1;

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
			console.log("clicked " + buttonClass)

			if ( isAdjacent(buttonClass) ) {
				reveal(this);
				setTimeout(function() {
					lifeCheck();
				},100);
				currentBox = buttonClass;
				console.log("Click adjacent!");
				console.log("currentbox: "+ currentBox);
			} else {
				console.log("Click NOT adjacent!");
				console.log("currentbox: "+ currentBox);
			}
		});

		$("#end-box").click(function() {
			var buttonClass = $(this).attr("class");
			// returns integer version of boxid number
			buttonClass = parseInt(buttonClass);

			if ( isAdjacent(buttonClass) ) {
				alert("You Win!")
				console.log("Click adjacent!");
				currentBox = buttonClass;	
				console.log("currentbox: "+ currentBox);
			} else {
				console.log("Not clicked")
			}
		})

	}
 
	function reveal(box) {
		var rand = Math.random();
		if (rand < clearChance) {
			box.innerHTML = "";
			$(box).css("background-color", "Linen");
		} else {
			box.innerHTML = '<img src="https://d30y9cdsu7xlg0.cloudfront.net/png/4948-200.png" width="100%"></img>';
			$(box).css("background-color", "Linen");
			playerLife--;
		}
	}

	function lifeCheck() {
		if (playerLife < 1) {
			alert('You are dead, refresh the page');
			$("div").off("click");
		}
	}

	function adjacentBoxes(boxid) {
		var adjacentBoxes = [];

		adjacentBoxes.push(boxid + 1);
		adjacentBoxes.push(boxid + 5);
		adjacentBoxes.push(boxid + 6);
		adjacentBoxes.push(boxid + 7);
		adjacentBoxes.push(boxid - 1);
		adjacentBoxes.push(boxid - 5);
		adjacentBoxes.push(boxid - 6);
		adjacentBoxes.push(boxid - 7);
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
	