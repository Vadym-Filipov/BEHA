// Generated by CoffeeScript 1.6.3
(function() {
  var $;

  $ = jQuery;

  jQuery.fn.extend({
    placeHolder: function() {
      this.focus(function() {
        if (jQuery(this).attr("value") === jQuery(this).attr("title")) {
          return jQuery(this).attr("value", "");
        }
      });
      this.blur(function() {
        if (jQuery(this).attr("value") === "") {
          return jQuery(this).attr("value", jQuery(this).attr("title"));
        }
      });
      return this.parents('form').submit(function() {
        if (jQuery(this).attr("value") === jQuery(this).attr("title")) {
          return jQuery(this).attr("value", "");
        }
      });
    }
  });

  $(document).ready(function() {
    var carusel;
    carusel = $(".carusel");
    $(".inputbox").placeHolder();
    $(document).click(function(event) {
      if ($(event.target).closest("#elem-id").length) {
        return;
      }
      $("#elem-id").hide();
      return event.stopPropagation();
    });
    $('.carusel ul').jcarousel({
      scroll: 1,
      visible: 3,
      animation: 'medium',
      itemLoadCallback: {
        onAfterAnimation: function() {
          return $(".jcarousel-next, .jcarousel-prev").show();
        }
      }
    });
    $(".galery").find('.preview-pic img').on('click', function() {
      var src;
      if (!($(this).hasClass("active"))) {
        src = $(this).data("source");
        $(".galery").find('img.active').removeClass("active");
        $(this).addClass("active");
        return $(".main-pic").find('img').attr('src', src);
      }
    });
  });

  jQuery(window).load(function() {
    var carusel;
    carusel = $(".carusel");
    carusel.find("li").first().addClass("active");
    $(".main-carusel-holder").find(".jcarousel-prev").on('click', function() {
      if (!carusel.find("li").first().hasClass('active')) {
        $(this).hide();
        setTimeout(function() {
          return $(".jcarousel-next, .jcarousel-prev").show();
        }, 300);
        return carusel.find("li.active").removeClass('active').prev().addClass("active");
      }
    });
    $(".main-carusel-holder").find(".jcarousel-next").on('click', function() {
      if (!carusel.find("li").last().hasClass('active')) {
        $(this).hide();
        setTimeout(function() {
          return $(".jcarousel-next, .jcarousel-prev").show();
        }, 300);
        return carusel.find("li.active").removeClass('active').next().addClass("active");
      }
    });
    carusel.find("li").on('click', function() {
      carusel.find("li.active").removeClass("active");
      return $(this).addClass('active');
    });
  });

}).call(this);
