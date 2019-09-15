$(document).ready(function () {

// Tabs
  $('.tabs-nav li').click(function () {
    var current = $(this).index();
    $(this).addClass('active').siblings().removeClass('active');
    $('.tabs-content .item').eq(current).addClass('display').siblings().removeClass('display');
  });

//Prallax
  $(window).scroll(function(){
    var pralaxedEl = $('.prallax'),
        heightTop = pralaxedEl.offset().top,
        windowHeight = $(window).height(),
        windowScrool = $(this).scrollTop();
    if ((heightTop-windowHeight) < windowScrool){
      var scrolled = $(window).scrollTop();
      pralaxedEl.css('background-position-y',-(scrolled*0.2)+'px');
    }
  });

//Slider
  var item = $('.testimonial-slider li'),
      itemsCount = item.length,
      itemsWidth = $('.slider').width() / 3;

  item.css('width', itemsWidth + 'px');

  $('.testimonial-slider').css('width', itemsCount * itemsWidth +'px');

  $('#prev').on('click', function () {
    var last = $('.testimonial-slider li').last().css({opacity: '0', width: '0px'});
    last.prependTo('.testimonial-slider');
    last.animate({opacity: '1', width: itemsWidth + 'px'});
  });

  $('#next').on('click', function () {
    var first = $('.testimonial-slider li').first();
    first.animate({opacity: '0', width: '0px'}, function() {
      first.appendTo('.testimonial-slider').css({opacity: '1', width: itemsWidth + 'px'});
    });
  });

});


