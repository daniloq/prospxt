// Smooth Scroll
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(
      /^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +
        ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
// Tabs
jQuery(function() {
  jQuery('.tab').click(function() {
    jQuery('.content').fadeOut(1000);
    jQuery('#tab' + $(this).attr('target')).fadeIn(1000);
    return false;
  });
  $('.tab').click(function() {
    $('a.active').not(this).removeClass('active');
    $(this).toggleClass('active');
  });
});
