function adjustStyle(width) {
	width = parseInt(width);
	if (width < 600) {
		$("#size-stylesheet").attr("href", "style-small.css");
	} else if ((width >= 600) && (width <= 1000)) {
		$("#size-stylesheet").attr("href", "style-medium.css");
	} else {
		$("#size-stylesheet").attr("href", "style-large.css");
	}
}

$(function() {
	adjustStyle($(this).width());
	$(window).resize(function() {
		adjustStyle($(this).width());
	});
});