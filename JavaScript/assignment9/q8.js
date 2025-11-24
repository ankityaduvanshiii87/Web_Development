// Q8 jQuery logic: append, prepend, remove, before/after tags, highlight keyword matches

$(function() {
  $('#add').on('click', function() {
    $('#posts').append('<li class="post">New Post ' + Date.now() + '</li>');
  });

  $('#prepend').on('click', function() {
    $('#posts').prepend('<li class="post featured">Featured Post ' + Date.now() + '</li>');
  });

  $('#removeLast').on('click', function() {
    $('#posts li').last().remove();
  });

  $('#tag').on('click', function() {
    $('#posts li.post').first().before('<span class="tag">[FEATURED]</span>');
    $('#posts li.post').last().after('<span class="tag">[END]</span>');
  });

  $('#highlight').on('click', function() {
    var kw = 'dom';
    $('#posts li.post').each(function() {
      var text = $(this).text();
      if (text.toLowerCase().indexOf(kw) !== -1) {
        $(this).css('background', '#fff2cc');
      }
    });
  });
});
