$(document).ready(function () {

// Tabs
  $('.tabs-nav li').click(function () {
    var current = $(this).index();
    $(this).addClass('active').siblings().removeClass('active');
    $('.tabs-content .item').eq(current).addClass('display').siblings().removeClass('display');
  });

});


