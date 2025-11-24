// Q5 jQuery logic: highlight reports, show contact via next(), department children styling, random sibling highlight, collapse/expand

$(function() {
  $('.member').each(function() {
    $(this).after('<div class="contact" style="display:none">Email: ' + $(this).text().toLowerCase() + '@example.com</div>');
  });

  $('.manager').on('click', function() {
    var $reports = $(this).nextUntil('.manager');
    $reports.filter('.member').css('background', '#fffbcc');
  });

  $('#team').on('mouseenter', '.member', function() {
    $(this).next('.contact').show();
  }).on('mouseleave', '.member', function() {
    $(this).next('.contact').hide();
  });

  $('.department').on('click', function(e) {
    if (e.target !== this) return;
    $(this).children('.member').css('background', '#e6f7ff');
  });

  $('#random').on('click', function() {
    var $members = $('.member');
    var idx = Math.floor(Math.random() * $members.length);
    $members.eq(idx).siblings('.member').css('border', '1px dashed #333');
  });

  $('#toggleTeam').on('click', function() {
    $('#team').children().each(function() {
      $(this).find('.member, .contact').toggle();
    });
  });
});
