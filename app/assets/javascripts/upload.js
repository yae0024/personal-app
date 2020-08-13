$(function(){
  function buildHTML(image) {
    var html =
      `<div class="attach-tags__content">
        <div class="prev-image">
          <img src="${image}", alt="preview" class="prev-image">
        </div>
        <div class="tags">
          <input type="text" name="picture[name]" placeholder="タグ（スペース区切り）" class="tags__name">
          <div class="tags__btn">
            <input type="submit" name="submit" value="確認" class="tags__btn__submit" data-disable-with="Send">
            <a class="tags__btn__delete">削除</a>
          </div>
        </div>
      </div>
      <hr>`
    return html;
  }
  $(document).on('change', '#attach-image', function () {
    var file = this.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      var image = this.result;
      if ($('.prev-image').length == 0) {
        var html = buildHTML(image)
        $('.attach-tags').append(html);
      } 
    }
  });
});