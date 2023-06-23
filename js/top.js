//TOPページのJS
$(function () {

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

  $.ajax({
    type: 'GET',
    url: 'https://graph.facebook.com/v6.0/17841459885725162?fields=name%2Cmedia.limit(5)%7Bcaption%2Clike_count%2Cmedia_url%2Cpermalink%2Ctimestamp%2Cthumbnail_url%2Cmedia_type%2Cusername%7D&access_token=EAAxxTh5Ja7UBAHSZBtL0TVqgVe9VMnidPnBhKZBtSlg137uw4I9b4qv90ZBRJjF41eXyApVUNAgOi4NxfZBZAH90eUZCXNNyl82ylGplZAPRPeHk0Y5Tbam1FIAOflUNa81mWNjwOGjkkakYmjYCCnM9mAacqIZAdwWtoln4TBzJzr7ixd6ZCJsRvkoaxCrlJZBOYZD',
    dataType: 'json',
    success: function (json) {

      var html = '';
      var insta = json.media.data;
      for (var i = 0; i < insta.length; i++) {
        var media_type = insta[i].media_type;
        if (media_type === "IMAGE" || media_type === "CAROUSEL_ALBUM") {
          html += '<li class="instagram__list"><a class="instagram__link" href="' + insta[i].permalink + '" target="_blank" rel="noopener noreferrer"><img class="instagram__img" src="' + insta[i].media_url + '"></a></li>';
        } else if (media_type === "VIDEO") {
          html += '<li class="instagram__list"><a class="instagram__link" href="' + insta[i].permalink + '" target="_blank" rel="noopener noreferrer"><img class="instagram__img" src="' + insta[i].thumbnail_url + '"></a></li>';
        }
      }
      $(".instagram__ul").append(html);
    },
    error: function () {
      console.log("インスタグラム画像取得にてエラーが発生しています。");
    }
  });
});