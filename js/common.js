//全ページ共通のJS
document.addEventListener('DOMContentLoaded', function () {
  //ヘッダー
  const header = document.getElementById('header');

  //ハンバーガーメニュー
  const hamburgerMenu = document.getElementById('hamburger-menu');

  //グローバルナビゲーション
  const gnav = document.getElementById('gnav');

  //
  const hrefLink = document.querySelectorAll('a[href^="#"]');

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

}, false);