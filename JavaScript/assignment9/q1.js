// Q1 jQuery logic:
// - On document ready, compute time of day and set a personalized greeting.
// - Attach click handlers to change greeting, toggle visibility, and alert on greeting click.

$(function() {
  var hour = new Date().getHours();
  var text = "Hello";
  if (hour < 12) text = "Good Morning";
  else if (hour < 18) text = "Good Afternoon";
  else text = "Good Evening";
  $('#greeting').text(text + ' visitor!');

  $('#changeGreeting').on('click', function() {
    $('#greeting').text('Believe you can and you\\'re halfway there.');
  });

  $('#toggleWelcome').on('click', function() {
    $('#welcomeMsg').toggle();
  });

  $('#greeting').on('click', function() {
    alert('Greeting clicked: ' + $(this).text());
  });
});
