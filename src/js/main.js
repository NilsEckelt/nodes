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
				window.scrollTo(0, pageTop);
				return false; 
			} 
		}); 
	});
});