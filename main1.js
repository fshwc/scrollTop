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

	$("#top").on("click",go);
	
	function move() {
		$('html,body').animate({
			scrollTop: 0
		},800);
	}

	function go() {
		$("html,body").scrollTop(0);
	}
})