$(document).ready(function () {

// Mobile menu
  var menuOpen = false;
  var mainNav = $('.main-nav');
  $('#menu-btn').on('click', function () {
    if (menuOpen) {
      mainNav.slideUp(500);
    } else {
      mainNav.slideDown(500);
    }
    menuOpen = !menuOpen
  });

  $('.submenu-isset').on('click', function (e) {
    e.preventDefault();
    $(this).children('.sub-menu-hidden').toggleClass('visible');
    $(this).siblings().children('.sub-menu-hidden').removeClass('visible');
  });

// Tabs
  function tabs(wrapClass) {
    $(wrapClass).find('.tab-button').on('click', function () {
      var current = $(this).index();
      $(this).addClass('active').siblings().removeClass('active');
      $(wrapClass).find('.item').eq(current).addClass('display').siblings().removeClass('display');
    })
  }

  tabs('.tabs-wrap');
  tabs('.tabs-wrap-second');

//Prallax
  var win = $(window);
  win.on('scroll', function () {
    var pralaxedEl = $('.prallax');
    var heightTop = pralaxedEl.offset().top;
    var windowHeight = win.height();
    var windowScrool = $(this).scrollTop();
    if ((heightTop - windowHeight) < windowScrool) {
      var scrolled = win.scrollTop();
      pralaxedEl.css('background-position-y', -(scrolled * 0.2) + 'px');
    }
  });

//Slider

  function slidesCount(sliderItem, sliderWrap) {
    var winWidth = win.width();
    var itemsCount = sliderItem.length;
    var slideWidth;

    if (992 <= winWidth) {
      slideWidth = sliderWrap.width() / 3;
    } else if (768 <= winWidth && winWidth <= 991) {
      slideWidth = sliderWrap.width() / 2;
    } else {
      slideWidth = sliderWrap.width();
    }

    sliderItem.css('width', slideWidth + 'px');
    sliderItem.parent().css('width', itemsCount * slideWidth + 'px');
  }

  function slider(wrapClass) {
    var slider = $(wrapClass);
    var slidesWrap = slider.find('.testimonial-slider');
    var item = slidesWrap.find('.item');
    var itemsWidth;

    win.on('resize', function () {
      slidesCount(item, slider);
      itemsWidth = item.width();
    });

    slidesCount(item, slider);
    itemsWidth = item.width();

    $(slider).find('.prev').on('click', function () {
      var last = slidesWrap.find('.item').last().css({opacity: '0', width: '0px'});
      last.prependTo(slidesWrap);
      last.animate({opacity: '1', width: itemsWidth + 'px'});
    });

    $(slider).find('.next').on('click', function () {
      var first = slidesWrap.find('.item').first();
      first.animate({opacity: '0', width: '0px'}, function () {
        first.appendTo(slidesWrap).css({opacity: '1', width: itemsWidth + 'px'});
      });
    });

  }

  slider('.slider-first');
  slider('.slider-second');

// Submit form
  $(".form").on('submit', function (event) {
    console.log($(this).serializeArray());
    event.preventDefault();
  });

});


