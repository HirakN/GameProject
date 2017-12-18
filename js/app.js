
$(document).ready(function() {

	for (var i = 1; i < 36; i++) {
		var div = $('<div class="box"></div>');
		$("#game-container").append(div);
	}

	var boxes = $(".box");
	console.log(boxes[1]);

})
	