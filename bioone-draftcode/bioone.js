$(document).ready(function() {
var toggleNav = function() {
$('nav ul').toggleClass('open');
};

$('.handle').click(function(){  
toggleNav();
});
 
var toggleCharterButton = function () {
$('#charter-supporters-container').toggleClass('open');
};

$('.btn-secondary-charter').click(function() {
toggleCharterButton();	
}); 

}); 

