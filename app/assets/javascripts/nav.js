document.addEventListener("turbolinks:load", function(){
  // アコーディオンメニューの開閉
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
  // navbar activeclassの付け替え
  if(document.URL.match("/media")) {
    $(".my-media").addClass("active");
  }else if(document.URL.match("/pictures/new")) {
    $(".upload").addClass("active");
  }else if(document.URL.match("/favorite")) {
    $(".favorite").addClass("active");
  }else if(document.URL.match("/message")) {
    $(".message").addClass("active");
  }else if(document.URL.match("/setting")) {
    $(".setting").addClass("active");
  }
  // 確認モーダルの表示
  let modal_open = document.getElementById("modal-open-btn");
  modal_open.onclick = function(e) {
    e.preventDefault();
    $('#overlay').fadeIn();
    document.getElementById('modal-close-btn').onclick = function () {
      $('#overlay').fadeOut();
    };
    document.getElementById("delete-comformation-btn").onclick = function () {
      document.getElementById("item-delete-btn").click();
    };
  };
})