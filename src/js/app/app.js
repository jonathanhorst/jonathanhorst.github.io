// @codekit-prepend "./Menu"
$(document).ready(function() {


  // Add class while scrolling
  // https://jsfiddle.net/Mottie/4C5KW/
  $(function() {

    var timer, el = $('body'),
      flag = false;
    $(window).scroll(function() {
      if (!flag) {
        flag = true;
        el.addClass('is-scrolling');
      }
      clearTimeout(timer);
      timer = setTimeout(function() {
        el.removeClass('is-scrolling');
        flag = false;
      }, 100);
    });

  });


});

// Initiate lazy load
lazyload();