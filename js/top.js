//TOPページのJS
document.addEventListener('DOMContentLoaded', function () {

  //galleryのサムネイル画像
  const thumbImgList = document.querySelectorAll('.gallery__thumb-img');

  //galleryのメイン画像
  const galleryViewImg = document.getElementById('gallery__view-img');

  //galleryのメイン画像タイトル
  const galleryViewTitle = document.getElementById('gallery__view-title');

  //画像フォルダパス
  const imgBasePath = "images/top/";

  //サムネイル画像クリック時の処理
  thumbImgList.forEach(thumbImg => {
    thumbImg.addEventListener('click', function () {
      //画像パスの設定
      const src = this.dataset.src;
      galleryViewImg.setAttribute('src', imgBasePath + src);

      //画像タイトルの設定
      const title = this.dataset.title;
      galleryViewTitle.innerText = title;
    })
  });
}, false);