//ヘッダーの背景色
$(window).on('scroll', function() {
  var scrollTop = $(this).scrollTop();
  if (80 < scrollTop) {
    $(".js-header").addClass("is-change-color");
  } else {
    $(".js-header").removeClass("is-change-color");
  }
});

//ハンバーガーアイコン、ドロワー
$('.js-sp-menu').on('click', function() {
  $(this).toggleClass('is-active');
  $(".js-drawer").toggleClass('is-active');
  /*スクロールしてもドロワー表示中ならハンバーガーアイコンを白色にする*/
  if($(".js-drawer").hasClass('is-active')) {
    $(".js-sp-menu").addClass('is-drawer-hamburger');
    $(".js-sp-span").addClass('is-drawer-hamburger');
  } else {
    $(".js-sp-menu").removeClass('is-drawer-hamburger');
    $(".js-sp-span").removeClass('is-drawer-hamburger');
  };
});

//エフェクト
AOS.init({
  duration: 1000,
  anchorPlacement: 'bottom-center',
});

//タブでコンテンツの切り替え
$('.js-tab').on('click', function() {
  var index = $('.js-tab').index(this);
  $('.js-tab, .js-tab-item').removeClass('is-active');
  $(this).addClass('is-active');
  $('.js-tab-item').eq(index).addClass('is-active');
});

//モーダルウインドウ
$('.js-modal-close').on('click', function() {
  $('.js-modal').fadeOut();
});
$('.js-modal-open').on('click',function(){
  $('.js-modal').fadeIn();
});

//セレクトボックスの初期値の色
function changeColor(seleted){
  if( seleted.value == 0 ){
      seleted.style.color = '';
  }else{
      seleted.style.color = 'black';
      
  }
}

//カレンダー
flatpickr.l10ns.ja.firstDayOfWeek = 0;// 日曜日始まり
flatpickr(".js-date", {
  // 日本語化
  locale: "ja",
  mode: "range",
  minDate: "today",
});
