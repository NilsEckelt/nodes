var nodes = function() {
	console.log("do nothing for the moment");
}

$(function() {
	$('.next-page').click(function() { 
		scrollTop = $(window).scrollTop(); 
		$('.page').each(function(i, page){  
			pageTop = $(page).offset().top; 
			console.log('yeeeha', pageTop, scrollTop);
			if (scrollTop<pageTop) {
				$.scrollTo(pageTop, 800);
				return false; 
			} 
		}); 
	});

});

$(window).scroll(function() {
	var persent = $(window).scrollTop() / ($('.intro').height() / 2);
	console.log(persent);
	$('.blurintro').css("opacity", persent)
});