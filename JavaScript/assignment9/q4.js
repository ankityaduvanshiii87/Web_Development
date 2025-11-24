// Q4 jQuery logic: hide/show/slide/fade banners and auto-rotate with fade effects

$(function() {
  var $b = $('#banners .banner');

  $('#hide').on('click', function() {
    $b.eq(0).hide();
  });
  $('#show').on('click', function() {
    $b.show();
  });
  $('#slide').on('click', function() {
    $b.slideToggle();
  });
  $('#fade').on('click', function() {
    $b.fadeToggle();
  });

  var idx = 0;
  setInterval(function() {
    $b.fadeOut(400);
    $b.eq(idx).fadeIn(400);
    idx = (idx + 1) % $b.length;
  }, 5000);
});
