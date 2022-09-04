$(document).ready(function(){
  // Modal 기능
  let modalWrap = $('.modal-wrap');
  let modalClose = $('.modal-close');
  // click() 을 이용해서 hide() 해보자!
  modalClose.click(function(){
    // modalWrap.hide();
    modalWrap.stop().fadeOut(300);
  });
});

$(document).ready(function(){
  // 메뉴열기
  let header_menu = $('.header-menu');
  let menu = $('.menu');
  header_menu.click(function(event){
    event.preventDefault();
    menu.addClass('menu-open');
  });

  // 메뉴닫기
  let mn_close = $('.mn-close');
  mn_close.click(function(event){
    event.preventDefault();
    menu.removeClass('menu-open');
  });
});

window.onload = function (){
  // 스크롤시 header 고정
  let header = $('.header');
  let wrap = $('.wrap');
  // 사라지는 시점 px 값 = banner의 높이값 px
  let fixY = $('.top-banner').height();
  $(window).scroll(function(){
    // 스크롤바의 세로상단 px 값
    let temp = $(window).scrollTop();
    // 60 은 topbanner 의 높이값 px
    if(temp > fixY) {
      header.addClass('header-fix');
      wrap.addClass('wrap-fix');
    }else{
      header.removeClass('header-fix');
      wrap.removeClass('wrap-fix');
    }
  });

  // 팝업닫기
  let top_banner = $('.top-banner');
  let top_bn_close = $('.top-bn-close');
  top_bn_close.click(function(){
    fixY = 0;
    top_banner.slideUp(300);
  });

  // 이벤트슬라이드(swiper)
  new Swiper('.event-left', {
    loop: true,
    speed: 500,
    navigation: {
      prevEl: '.event-left-prev',
      nextEl: '.event-left-next'
    },
    pagination: {
      el: '.event-left-pg',
      type: 'fraction'
    }
  });
};