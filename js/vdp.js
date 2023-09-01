jQuery(document).ready(function($) { 

    // vehcile slider
    $('.slider-single').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        adaptiveHeight: true,
        infinite: false,
        useTransform: true,

        speed: 400,
        cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
    });



    // slider nav
    $('.slider-nav')
        .on('init', function(event, slick) {
            $('.slider-nav .slick-slide.slick-current').addClass('is-active');
        })
        .slick({
            slidesToShow: 4.1,
            slidesToScroll: 1,
            dots: false,
            focusOnSelect: false,
            infinite: false,
            verticalSwiping: true,
            vertical: false,
            arrows: false,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4.1,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2.1,
                    slidesToScroll: 2,
                    vertical: false
            }
            }, {
                breakpoint: 420,
                settings: {
                    slidesToShow: 2.1,
                    slidesToScroll: 2,
                    vertical: false
        }
            }]
    });

    $('.slider-single').on('afterChange', function(event, slick, currentSlide) {
        $('.slider-nav').slick('slickGoTo', currentSlide);
        var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
        $('.slider-nav .slick-slide.is-active').removeClass('is-active');
        $(currrentNavSlideElem).addClass('is-active');
    });
   
    $('.slider-nav').on('click', '.slick-slide', function(event) {
        event.preventDefault();
        var goToSingleSlide = $(this).data('slick-index');
   
        $('.slider-single').slick('slickGoTo', goToSingleSlide);
    }); 

    $('body').on('click', '*[data-calc="open"]', function(e){
        e.preventDefault();
        $('.financeCalc').addClass('open');
    });

    $('body').on('click', '*[data-calc="close"]', function(e){
		e.preventDefault();
        $('.financeCalc').removeClass('open');
    });

    $('#leadForm').on('shown.bs.modal', function() {
        $('#first-name').trigger('focus');
    });

    $(".heart").on("click", function() {
        $(this).toggleClass("is-active");
    });

    if ($(window).width() > 1150) {
        
        let vdpSideBarHeight = $('#vdp-sidebar').height();
        setTimeout(function () {
            let sliderNavHeight = $('.slider-nav').height();    
            console.clear();
            console.log(vdpSideBarHeight,sliderNavHeight);
            console.log(vdpSideBarHeight - sliderNavHeight);
        
            $('.single-img').height(vdpSideBarHeight - (sliderNavHeight - 35));    
        }, 5)

    }

})