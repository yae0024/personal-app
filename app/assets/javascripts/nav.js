$(function(){
  $('#colums-menu').click(function(e) {
    e.preventDefault();
    if($('#users-accordion').hasClass('hidden')){
    } else{
      $('#users-accordion').addClass('hidden');
    }
    $('#colums-accordion').toggleClass('hidden');
  });
  $('#users-menu').click(function(e) {
    e.preventDefault();
    if($('#colums-accordion').hasClass('hidden')){
    } else{
      $('#colums-accordion').addClass('hidden');
    }
    $('#users-accordion').toggleClass('hidden');
  });
});