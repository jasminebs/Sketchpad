$(document).ready(function() {

var squareGrid = 256;

for (i = 0; i < squareGrid; i++) {
 $(".container").append('<div class="square"></div>');
}

squareGrid;

$(".square").hover(function() {
	$(this).css("background-color", "green");
}, function() {
	$(this).css("background-color", "green");
	});

$("#clearGrid").click(function() {
	$(".square").remove(); //Removes current grid
	var input = prompt("How big do you want to make your Sketchpad? Enter a number.");
	if(isNaN(input)) {
		alert("Please enter a number.");
}
	else {
		$(".square").removeAttr("width");
		$(".square").removeAttr("height");
		for (l = 0; l < (input * input); l++) {
			$(".container").append('<div class="square"></div>');
			$(".square").css("width", 320 / input);
			$(".square").css("height", 320 / input);
		}
	};

	$(".square").hover(function() {
		$(this).css("background-color", "green");
	}, function() {
		$(this).css("background-color", "green");
	});

}); 
});