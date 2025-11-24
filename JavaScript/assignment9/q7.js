// Q7 jQuery logic: real-time filtering, highlight matched text, toggle visibility, count matches, clear reset

$(function() {
  $('#search').on('keyup', function() {
    var q = $(this).val().toLowerCase();
    var matched = 0;
    $('#courses li').each(function() {
      var text = $(this).text();
      if (text.toLowerCase().indexOf(q) !== -1) {
        $(this).show();
        if (q) {
          var regex = new RegExp('(' + q + ')', 'ig');
          $(this).html(text.replace(regex, '<span class="match">$1</span>'));
          $(this).find('.match').css('background', 'yellow');
        } else {
          $(this).text(text);
        }
        matched++;
      } else {
        $(this).hide();
      }
    });
    $('#count').text(matched + ' courses matched');
  });

  $('#clear').on('click', function() {
    $('#search').val('');
    $('#courses li').show().each(function() { $(this).text($(this).text()); });
    $('#count').text('');
  });
});
