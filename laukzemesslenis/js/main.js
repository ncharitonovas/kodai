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

    $(document).ready(function() {
        $(".owl-carousel").owlCarousel();
    });

    $('.owl-carousel-clients').owlCarousel({
       autoplay:true,
       autoplayTimeout:5000,
       loop:true,
       margin:23,
       nav:false,
       dots:false,
       responsive:{
           0:{
               items:1
           },
           400:{
               items:2
           },

           600:{
               items:2
           },
           800:{
               items:3
           },
           1000:{
               items:4
           }
       }
   })

    var owl = $('.owl-carousel');
    owl.owlCarousel({
        margin: 26,
        nav: false,
        loop: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            641: {
                items: 2
            },
            1025: {
                items: 3
            },

        }
    });

    var owl1 = $('#shifts-slider');
    $('.shifts-slider-next').click(function() {
        owl1.trigger('next.owl.carousel');
    });

    $('.shifts-slider-prev').click(function() {
        owl1.trigger('prev.owl.carousel');
    });


    var owl2 = $('#employee-slider');
    $('.employee-slider-next').click(function() {
        owl2.trigger('next.owl.carousel');
    });

    $('.employee-slider-prev').click(function() {
        owl2.trigger('prev.owl.carousel');
    });

    $(".hamburger").click(function() {
        $(".mob-nav").slideToggle(350);
        $(".mob-nav").toggleClass("close");
        $(this).toggleClass("is-active");
    });

    $('.entry table').wrap('<div class="table-scroll"></div>');
    $('.mailerlite-form-inputs').wrap('<div class="small-12 medium-12 large-6 columns nopad order-area"></div>');
    $('.mailerlite-form-title,.mailerlite-form-description').wrapAll('<div class="small-12 medium-12 large-6 columns nopad order"></div>');
    $("#mailerlite-2-field-email").attr("placeholder", "Jūsų El.paštas");


    $('.gallery.lg a').each(function() {
        var itemW = $(this).outerWidth();
        var itemH = itemW / 2.004;
        $(this).css('height', itemH);
    });

    $('.gallery.md a').each(function() {
        var itemW = $(this).outerWidth();
        var itemH = itemW / 1.9;
        $(this).css('height', itemH);
    });

    $('.gallery.sm a').each(function() {
        var itemW = $(this).outerWidth();
        var itemH = itemW / 1.62;
        $(this).css('height', itemH);
    });

    $('.gallery-thumbs a').each(function() {
        var itemW = $(this).outerWidth();
        var itemH = itemW / 1.277;
        $(this).css('height', itemH);
    });



    // popups

    // $(".trigger").click(function() {
    //     $(".nav ul").toggleClass("close");
    //     $(".trigger").toggleClass("close");
    // });


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

 $(window).resize(function() {

     $('.gallery.lg a').each(function() {
         var itemW = $(this).outerWidth();
         var itemH = itemW / 2.004;
         $(this).css('height', itemH);
     });

     $('.gallery.md a').each(function() {
         var itemW = $(this).outerWidth();
         var itemH = itemW / 1.9;
         $(this).css('height', itemH);
     });

     $('.gallery.sm a').each(function() {
         var itemW = $(this).outerWidth();
         var itemH = itemW / 1.62;
         $(this).css('height', itemH);
     });

     $('.gallery-thumbs a').each(function() {
         var itemW = $(this).outerWidth();
         var itemH = itemW / 1.277;
         $(this).css('height', itemH);
     });

});
