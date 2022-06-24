$(function() {
    var $win = $(window),
        $header = $('header'),
        headerHeight = $header.outerHeight(),
        startPos = 0;
        $("body").css("margin-top", headerHeight + 10);//10pxだけ余裕をもたせる

    $win.on('load scroll', function() {
      var value = $(this).scrollTop();
      if ( value > startPos && value > headerHeight ) {
        $header.css('top', '-' + headerHeight + 'px');
      } else {
        $header.css('top', '0');
      }
      startPos = value;
    });
  });