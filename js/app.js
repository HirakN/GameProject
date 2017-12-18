
$(document).ready(function() {

	var clearChance = 0.6;

	function makeGrid() {
		// Starting point
		var div = $('<div id="start-box"></div>');
		$("#game-container").append(div);
		for (var i = 0; i < 34; i++) {
			var div = $('<div class="box"></div>');
			$("#game-container").append(div);
		}
		// Finish line
		var div = $('<div id="end-box"></div>');
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
})
	