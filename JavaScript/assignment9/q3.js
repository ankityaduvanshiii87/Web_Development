// Q3 jQuery logic:
// - Toggle answer visibility on question click.
// - Hover changes question color.
// - Double-click collapses all answers.
// - Focusing the input highlights its parent question and blur resets.

$(function() {
  $('#faq').on('click', '.q', function() {
    $(this).next('.a').slideToggle();
  });

  $('#faq').on('mouseenter', '.q', function() {
    $(this).css('color', 'blue');
  }).on('mouseleave', '.q', function() {
    $(this).css('color', '');
  });

  $('#faq').on('dblclick', '.q', function() {
    $('#faq .a').slideUp();
  });

  $('#ansInput').on('focus', function() {
    $('.qa').first().css('background', '#fffbdd');
  }).on('blur', function() {
    $('.qa').first().css('background', '');
  });
});
