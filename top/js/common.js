// 下拉菜单显示
$(function () {
  $('.nav').on('mouseenter', 'li', function () {
    $(this).find('ul').stop().slideDown();
    var i = $(this).index();
    if (i > 6) {
      $('.line').css('display', 'none');
    } else {
      var l = 160 * i;
      $('.line').css('display', 'block')
        .stop().animate({ 'left': l }, 400, 'linear');
    }
  });
  $('.nav').on('mouseleave', 'li', function () {
    var i = $(this).index();
    var l = 160 * i;
    $(this).find('ul').stop().slideUp();
    $('.line').css('display', 'none');
  });
});


// 滚动变化
$(window).scroll(function () {
  var v = $(this).scrollTop();
  if (v >= 500) {
    $('.info').css('display', 'none');
    $('.nav').find('li:last-child').css('display', 'block');
    $('.logo img').stop().animate({ width: 30 }, 500, 'linear')
  } else {
    $('.info').css('display', 'block')
    $('.nav').find('li:last-child').css('display', 'none');
    $('.logo img').stop().animate({ width: 55 }, 500, 'linear')

  }
})