
$(document).ready(function() {
var toggleNav = function() {
$('nav').toggleClass('open');
};

$('.handle').click(function(){  
toggleNav();
});
 
var toggleCharterButton = function () {
$('#charter-supporters-container').toggleClass('open');
};

$('.btn-secondary-charter').click(function() {
toggleCharterButton();	 
 
$(this).text($(this).text() === 'Show list' ? 'Close list' : 'Show list');
return false;
   });
});






