//全ページ共通のJS
document.addEventListener('DOMContentLoaded', function () {
  //ハンバーガーメニュー
  const hamburgerMenu = document.getElementById('hamburger-menu');

  //グローバルナビゲーション
  const gnav = document.getElementById('gnav');

  hamburgerMenu.addEventListener('click', function(){
    this.classList.toggle('opened');
    gnav.classList.toggle('is-active');
  });
}, false);