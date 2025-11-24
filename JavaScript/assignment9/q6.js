// Q6 jQuery logic: toggle notifications, dynamically add topics, attach/detach handlers, insert success messages

$(function() {
  var notificationsEnabled = false;
  var $messages = $('#messages');

  $('#subscribe').on('click', function() {
    notificationsEnabled = true;
    $messages.append('<div class="msg">Notifications enabled</div>');
  });

  $('#unsubscribe').on('click', function() {
    notificationsEnabled = false;
    $messages.append('<div class="msg">Notifications disabled</div>');
  });

  $('#topics').on('click', '.topic', function() {
    if (notificationsEnabled) {
      $messages.append('<div class="msg">Subscribed to ' + $(this).text() + '</div>');
    } else {
      $messages.append('<div class="msg">Click Subscribe first</div>');
    }
  });

  $('<button class="topic">NewTopic</button>').appendTo('#topics');

  setTimeout(function() {
    $('#topics .topic').filter(function(){ return $(this).text() === 'Offers'; }).off('click');
    $messages.append('<div class="msg">Offers unsubscribed (handler removed)</div>');
  }, 3000);
});
