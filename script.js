$(document).ready(function(){
    $(".autoplay").slick({
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500
      });
      $(".img_gallery").slick({
        dots: true,
        infinite: true, //не забыть посмотреть centerMode!
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
      });
    });
    $(document).ready(function() {
        $("a.scrollto").click(function () {
          elementClick = $(this).attr("href")
          destination = $(elementClick).offset().top;
          $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
          return false;
        });
      });
    