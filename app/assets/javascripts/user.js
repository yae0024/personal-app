document.addEventListener("turbolinks:load", function(){
  $(function(){
    $('#simple-login').on('click', function(e){
      e.preventDefault();
      $('#email').val('demo@gmail.com')
      $('#password').val('loginsample')
      $('input[type="submit"]').click()
    });
  });
})