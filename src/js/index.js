$(document).ready(function () {

  // Mobile menu
  let menuOpen = false,
    mainNav = $('.main-nav');
  $('#menu-btn').on('click', function () {
    if (menuOpen) {
      mainNav.slideUp(500);
    } else {
      mainNav.slideDown(500);
    }
    menuOpen = !menuOpen;
  });

  $('.submenu-isset').on('click', function (e) {
    e.preventDefault();
    $(this).children('.sub-menu-hidden').toggleClass('visible');
    $(this).siblings().children('.sub-menu-hidden').removeClass('visible');
  });

  // Tabs
  $('.tabs-nav li').on('click', function () {
    let current = $(this).index();
    $(this).addClass('active').siblings().removeClass('active');
    $('.tabs-content .item').eq(current).addClass('display').siblings().removeClass('display');
  });

  //Prallax
  let win = $(window);

  win.on('scroll', function () {
    let pralaxedEl = $('.prallax'),
      heightTop = pralaxedEl.offset().top,
      windowHeight = win.height(),
      windowScrool = $(this).scrollTop();
    if ((heightTop - windowHeight) < windowScrool) {
      let scrolled = win.scrollTop();
      pralaxedEl.css('background-position-y', -(scrolled * 0.2) + 'px');
    }
  });

//Slider
  let item = $('.testimonial-slider li'),
    itemsCount = item.length,
    slider = $('.slider'),
    itemsWidth;

  if (win.width() > 991) {
    itemsWidth = slider.width() / 3;
  } else if (win.width() < 991) {
    itemsWidth = slider.width() / 2;
  } else if (win.width() < 768) {
    itemsWidth = slider.width()
  }

  item.css('width', itemsWidth + 'px');

  $('.testimonial-slider').css('width', itemsCount * itemsWidth + 'px');

  let sliderItem = $('.testimonial-slider li');

  $('#prev').on('click', function () {
    let last = sliderItem.last().css({opacity: '0', width: '0px'});
    last.prependTo('.testimonial-slider');
    last.animate({opacity: '1', width: itemsWidth + 'px'});
  });

  $('#next').on('click', function () {
    let first = sliderItem.first();
    first.animate({opacity: '0', width: '0px'}, function () {
      first.appendTo('.testimonial-slider').css({opacity: '1', width: itemsWidth + 'px'});
    });
  });

  // Submit form
  $(".form").on('submit', function (event) {
    console.log($(this).serializeArray());
    event.preventDefault();
  });

});


