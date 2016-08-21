'use strict';
(function Carousel (){
	var images = [];
	images = document.querySelectorAll('.simple-js-carousel>img');//class "simple-js-carousel" is anchor of our carousel
	
	var simpleJsCarousel = document.querySelector('.simple-js-carousel');
	
	var parentSimpleJsCarousel = document.createElement('div');//create div as wrapper for our carousel
	document.body.insertBefore(parentSimpleJsCarousel, simpleJsCarousel);
	parentSimpleJsCarousel.appendChild(simpleJsCarousel);

	//count max width and max height of images
	var maxWidth = images[0].width;
	var maxHeight = images[0].height;
	var left = 0;
	
	for (var i = 1; i < images.length; i++){
		if (images[i].width > maxWidth){
			maxWidth = images[i].width;
		}
		if (images[i].height > maxHeight){
			maxHeight = images[i].height;
		}
	}
	
	for (var i = 0; i < images.length; i++){
		
		var imgWrap = document.createElement('div');
		simpleJsCarousel.appendChild(imgWrap);
		imgWrap.appendChild(images[i]);
		imgWrap.style.width = maxWidth + 'px';
		imgWrap.style.height = maxHeight + 'px';
		imgWrap.style.float = 'left';
		imgWrap.style.left = left + 'px';
		imgWrap.style.textAlign = 'center';
		left = left + maxWidth;
		if (images[i].height < maxHeight){
			images[i].style.marginTop = (maxHeight-images[i].height)/2 + 'px';
		}
	}
	
	parentSimpleJsCarousel.style.width = maxWidth + 'px';
	parentSimpleJsCarousel.style.height = maxHeight + 'px';
	parentSimpleJsCarousel.style.overflow = 'hidden';
	parentSimpleJsCarousel.style.margin = 'auto';
	parentSimpleJsCarousel.style.position = 'relative';
	
	simpleJsCarousel.style.width = left + 'px';
	simpleJsCarousel.style.overflow = 'visible';
	simpleJsCarousel.style.transitionDuration = '0.5s';
	
	var controls = document.createElement('div');
	parentSimpleJsCarousel.appendChild(controls);
	controls.style.position = 'absolute';
	controls.style.width = '100%';
	
	var next = document.createElement('div');
	controls.appendChild(next);
	next.style.width = '70px';
	next.style.height = '70px';
	next.style.marginRight = '10px';
	next.style.background = 'url("../images/controls_next.png"),rgba(0,0,0,0.2)';
	next.style.backgroundSize = 'contain';
	next.style.float = 'right';
	next.style.cursor = 'pointer';
	next.style.borderRadius = '50%';
	
	var prev = document.createElement('div');
	controls.appendChild(prev);
	prev.style.width = '70px';
	prev.style.height = '70px';
	prev.style.marginLeft = '10px';
	prev.style.background = 'url("../images/controls_prev.png"),rgba(0,0,0,0.2)';
	prev.style.backgroundSize = 'contain';
	prev.style.float = 'left';
	prev.style.cursor = 'pointer';
	prev.style.display = 'none';
	prev.style.borderRadius = '50%';
	
	controls.style.top = '50%';
	controls.style.marginTop = '-35px';
	
	var move = 0;
	
	prev.onclick = function(){
		if (move <= -maxWidth){
			if (next.style.display = 'none'){
				next.style.display = 'block';
			}
			if (move == -maxWidth){
				prev.style.display = 'none';
			}
			move += maxWidth;
			simpleJsCarousel.style.transform = 'translate3d(' + move + 'px, 0px, 0px)';
		} else {
			prev.style.display = 'none';
		}
	};
	
	next.onclick = function(){
		if (move >= -(left - maxWidth*2)){
			move -= maxWidth;
			if (prev.style.display = 'none'){
				prev.style.display = 'block';
			}
			if (move == -(left - maxWidth)){
				next.style.display = 'none';
			}
			simpleJsCarousel.style.transform = 'translate3d(' + move + 'px, 0px, 0px)';
		} else {
			next.style.display = 'none';
		}
	};
}());