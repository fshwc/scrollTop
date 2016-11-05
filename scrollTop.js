;$(function(){
	function ScrollTop(el, opts) {
		this.opts = $.extend({}, ScrollTop.DEFAULTS, opts)
		this.$el = $(el);
		this.$html = $("html,body");

		if(this.opts.ischeckPosition) {
			this._checkPosition();
			$(window).on('scroll',$.proxy(this._checkPosition,this))
		}
		
		if(this.opts.mode == 'move') {
			this.$el.on('click', $.proxy(this._move, this));
		}else {
			this.$el.on('click', $.proxy(this._go, this));
		}		
	}

	ScrollTop.DEFAULTS = {
		mode: 'move',                  //运动的方式  move-慢速,否则快速一下到位
		pos: $(window).height(),       //显示按钮的滚动距离
		dest: 0,                       //滚动的终点
		speed: 800,                    //速度
		ischeckPosition: true          //图标是否超出某范围再显示
	}

	//慢速移动
	ScrollTop.prototype._move = function() {
		var opts = this.opts;
		if($(window).scrollTop() != opts.dest) {
			if(!this.$html.is(':animated')) {
				this.$html.animate({
					scrollTop: opts.dest
				},opts.speed);
			}
		}
	}

	//快速移动
	ScrollTop.prototype._go = function() {
		if($(window).scrollTop() != this.opts.dest) {
			this.$html.scrollTop(this.opts.dest);
		}
	}

	//当滚动到一定距离的时候才显示按钮
	ScrollTop.prototype._checkPosition = function() {
		if($(window).scrollTop() > this.opts.pos) {
			this.$el.fadeIn();
		}else {
			this.$el.fadeOut();
		}
	}

	//暴露到全局变量中
	window["ScrollTop"] = ScrollTop;
}());