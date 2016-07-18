$(document).ready(function() {
  // Ian's note:
  // Whoops, I forgot one of the most important pieces of using
  // jQuery – the "document ready function," or the DRF as
  // you'll sometimes see it called.

  // When a browser sees a Javascirpt file included on a page,
  // it will automatically run it AS SOON as it downloads it.
  // Since all of your Javascript is at the top of your HTML, that
  // means that it's getting run before the rest of the page is
  // even built. That makes a problem.....

  var toggleNav = function() {
   $('nav').toggleClass('open');
  };

  // Ian's note: 
  // ...down here! The .click() function below tells jQuery to watch for 
  // clicks on the .handle element, but if this code runs before
  // the .handle element even exists, jQuery doesn't know what to do
  // with it. There's no .handle for jQuery to watch.

  // Thus, the DRF. It tells jQuery "okay, hold onto all of this stuff
  // and don't actually run it until the entire document is built and
  // ready to go." By nesting your functions within it, the navigation
  // toggle now works properly because jQuery is able to find .handle
  // and attach the handler to it.

  $('.handle').click(function(){  
    toggleNav();
  });
});