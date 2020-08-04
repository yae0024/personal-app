// https://qiita.com/Masanori_N/items/71dbf648737f32dd8588
$(function(){
  function buildHTML(image) {
    var html =
      `<div class="prev-content">
        <img src="${image}", alt="preview" class="prev-image">
      </div>
      <div>
        <textarea name="tags_field" cols="40" rows="10" class="tag_field autosize pure-input-1 autosized" placeholder="タグ（コンマで区切って下さい）" style="height: 60px; overflow: hidden; overflow-wrap: break-word;" maxlength="1000" data-lang="ja" required=""></textarea>
        <div>
        <form class="button_to" method="post" action="/pictures"><input type="submit" value="保存" /></form>
          <a>削除</a>
        </div>
      </div>`
    return html;
  }
  $(document).on('change', '#upload-img', function () {
    console.log('OK');
    var file = this.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      var image = this.result;
      if ($('.prev-content').length == 0) {
        var html = buildHTML(image)
        $('.input-area').append(html);
      } 
    }
  });
});