$(document).ready(function() {
  var toggleNav = function() {
   $('nav ul').toggleClass('open');
  };

  $('.handle').click(function(){  
    toggleNav();
  });
});
