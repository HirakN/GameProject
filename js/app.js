
$(document).ready(function() {

	var safePath = [];

	for (var i = 0; i < 36; i++) {
		var div = $('<div class="box"></div>');
		$("#game-container").append(div);
	}

	$(".box").one("click", function() {
		console.log("Click!");
		reveal(this);	
	});

	function reveal(box) {
		box.innerHTML = "hello";
	}
})
	