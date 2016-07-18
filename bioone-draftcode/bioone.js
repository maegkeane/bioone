var toggleNav = function() {
 $('nav').toggleClass('open');
};

$('.handle').click(function(){
	toggleNav();
});