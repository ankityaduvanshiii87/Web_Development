// Q10 jQuery logic: validate name, email format & uniqueness, password length.
// - Use preventDefault to stop form submission.
// - Highlight invalid fields with red border and remove highlight on input.

$(function(){
  var existingEmails = ['test@example.com','user@site.com'];
  $('#regForm').on('submit', function(e){
    e.preventDefault();
    var name = $('#name').val().trim();
    var email = $('#email').val().trim();
    var pass = $('#password').val();
    var ok = true;
    $('.err').text('');
    $('input').css('border','');

    if (!name) {
      $('#errName').text('Name required');
      $('#name').css('border','1px solid red');
      ok = false;
    }
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      $('#errEmail').text('Valid email required');
      $('#email').css('border','1px solid red');
      ok = false;
    } else if (existingEmails.indexOf(email.toLowerCase()) !== -1) {
      $('#errEmail').text('Email already taken');
      $('#email').css('border','1px solid red');
      ok = false;
    }
    if (!pass || pass.length < 8) {
      $('#errPass').text('Password must be at least 8 characters');
      $('#password').css('border','1px solid red');
      ok = false;
    }

    if (ok) {
      $('#success').show();
    }
  });

  $('#name, #email, #password').on('input', function(){
    var id = $(this).attr('id');
    $('#err' + id.charAt(0).toUpperCase() + id.slice(1)).text('');
    $(this).css('border','');
    $('#success').hide();
  });
});
