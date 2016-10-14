requirejs.config({
	paths: {
		jquery: "jquery.min"
	}
});

requirejs(['jquery','scrollto'],function($,scrollto) {
	
	$(window).on("scroll",function() {
		checkPosition($(window).height());
	});
	function checkPosition(pos) {
		if($(window).scrollTop() > pos) {
			$("#top").fadeIn();
		}else {
			$("#top").fadeOut();
		}
	}

	var scroll = new scrollto.ScrollTo({
		dest: 0,
		speed: 2000
	});
	$("#top").on("click",$.proxy(scroll.move,scroll));
})