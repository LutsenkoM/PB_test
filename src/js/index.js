$(document).ready(function () {
  // Mobile menu
  var menuOpen = false,
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
    var current = $(this).index();
    $(this).addClass('active').siblings().removeClass('active');
    $('.tabs-content .item').eq(current).addClass('display').siblings().removeClass('display');
  });

  //Prallax
  var window = $(window);

  window.on('scroll', function () {
    var pralaxedEl = $('.prallax'),
      heightTop = pralaxedEl.offset().top,
      windowHeight = $(window).height(),
      windowScrool = $(this).scrollTop();
    if ((heightTop - windowHeight) < windowScrool) {
      var scrolled = $(window).scrollTop();
      pralaxedEl.css('background-position-y', -(scrolled * 0.2) + 'px');
    }
  });

//Slider
  var item = $('.testimonial-slider li'),
    itemsCount = item.length,
    slider = $('.slider'),
    itemsWidth;

  if (window.width() > 991) {
    itemsWidth = slider.width() / 3;
  } else if (window.width() < 991) {
    itemsWidth = slider.width() / 2;
  } else if (window.width() < 768) {
    itemsWidth = slider.width()
  }

  item.css('width', itemsWidth + 'px');

  $('.testimonial-slider').css('width', itemsCount * itemsWidth + 'px');

  var sliderItem = $('.testimonial-slider li');

  $('#prev').on('click', function () {
    var last = sliderItem.last().css({opacity: '0', width: '0px'});
    last.prependTo('.testimonial-slider');
    last.animate({opacity: '1', width: itemsWidth + 'px'});
  });

  $('#next').on('click', function () {
    var first = sliderItem.first();
    first.animate({opacity: '0', width: '0px'}, function () {
      first.appendTo('.testimonial-slider').css({opacity: '1', width: itemsWidth + 'px'});
    });
  });

  // Submit form
  $(".form").on('submit', function (event) {
    console.log('Form data', $(this).serializeArray());
    event.preventDefault();
  });

});


