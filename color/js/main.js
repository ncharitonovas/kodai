$(document).foundation();

$(document).ready(function() {

    $(".fancybox").fancybox({
        helpers: {
            overlay: {
                locked:false
            }
        },
        beforeShow: function(){
          $(".fancybox-skin").css("backgroundColor","transparent");
          $(".fancybox-skin").css("padding","0px");
        }
    });

    // popups

    $(".hamburger").click(function() {
        $(".hamburger").toggleClass("is-active");
        $(".mob-nav").slideToggle(200);
    });

    window.onresize = function(event) {
        var heighten = $(".block-image").width();
        $(".block-image").height(heighten);
    };



    // setTimeout(function(){
    //     var heighten = $(".block-image").outerWidth();
    //     $(".block-image").outerHeight(heighten);
    // },500);

    // var maxHeight = 0;
    //
    // $(".oneheight").each(function(){
    //    if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
    // });
    //
    // $(".oneheight").height(maxHeight);

    // setTimeout(function(){
    //     var heighten = $(".block-image").width();
    //     $(".block-image").height(heighten);
    //
    // }, 5000);


    // var maxHeight = 0;

    // $(".oneheight").each(function(){
    //    if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
    // });
    //
    // $(".oneheight").height(maxHeight);



    // var heighten2 = $(".block-info").outerHeight();
    // $(".price-block").outerHeight(heighten2);



    // #ScrollToTop

    // $("a[href='#top']").click(function() {
    //   $("html, body").animate({ scrollTop: 0 }, "slow");
    //   return false;
    // });


    // #href scroll //

    // $('a[href^="#"]').on('click',function (e) {
    //     e.preventDefault();

    //     var target = this.hash;
    //     var $target = $(target);

    //     $('html, body').stop().animate({
    //         'scrollTop': $target.offset().top
    //     }, 700, 'swing', function () {
    //         window.location.hash = target;
    //     });
    // });



 });
