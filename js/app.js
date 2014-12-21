$(document).foundation();

$(document).ready(function() {
	var elems = $('.fadeUp');
	for (var i = 0; i < elems.length; i++) {
		$(elems[i]).addClass('animated');
		$(elems[i]).addClass('fadeInUp');
	};
});
