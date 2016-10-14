requirejs.config({
	paths: {
		jquery: "jquery.min"
	}
});

requirejs(['jquery','backtop'],function($,backtop) {
	$("#top").backtop({
		mode: 'move',
		speed: 2000
	})
})