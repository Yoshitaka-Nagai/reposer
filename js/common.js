//全ページ共通のJS
$(function () {
  //ヘッダー
  const header = document.getElementById('header');

  //ハンバーガーメニュー
  const hamburgerMenu = document.getElementById('hamburger-menu');

  //グローバルナビゲーション
  const gnav = document.getElementById('gnav');

  //js-クラス付与対象リスト
  const jsTargetList = document.querySelectorAll('.js-target, .js-fadeIn, .js-fadeUp');

  //
  const adjustmentNumber = 0.5;

  //
  const hrefLink = document.querySelectorAll('a[href^="#"]');

  //現在のページURLのハッシュ
  const hash = location.hash;

  //ハッシュ部分がある場合の条件分岐
  if (hash) {
    //ページ遷移後のスクロール位置指定
    $("html, body").stop().scrollTop(0);
    //処理を遅らせる
    setTimeout(function () {
      const headerHeight = header.clientHeight;
      //リンク先を取得
      const target = $(hash);
      //リンク先までの距離を取得
      const position = target.offset().top - headerHeight;
      //指定の場所までスムーススクロール
      $("html, body").animate({ scrollTop: position }, 400, "swing");
    }, 100);
  }

  window.addEventListener('scroll', function () {
    setJsTargetActive();
  });

  //ハンバーガーメニュークリック時処理
  hamburgerMenu.addEventListener('click', function () {
    this.classList.toggle('opened');
    gnav.classList.toggle('is-active');
  });

  //ナビゲーションリンククリック時処理
  hrefLink.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      //対象場所へスムーススクロール
      const href = this.getAttribute('href').replace('#', '');
      const headerHeight = header.clientHeight;
      const target = document.getElementById(href);
      const targetPos = target.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scroll({
        top: targetPos,
        behavior: 'smooth',
      });

      //メニューを閉じる
      hamburgerMenu.classList.remove('opened');
      gnav.classList.remove('is-active');
    });
  });

  //対象にクラス付与
  function setJsTargetActive() {
    const windowHeight = window.innerHeight;
    const st = window.scrollY;
    jsTargetList.forEach((e) => {
      const position = e.getBoundingClientRect().top + st;
      if (st > position - windowHeight * adjustmentNumber) {
        e.classList.add('js-active');
      }
    });
  }

});