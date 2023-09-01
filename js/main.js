jQuery(document).ready(function() {

    //Mobile Navigation
    $('body').on('click', '.navbar-toggler', function() {
        if ($('#websitenavbar').hasClass("show")) {
            $('body').removeClass('overflow-hidden');
        } else {
            $('body').addClass('overflow-hidden');
        };
    });

    // Header Active
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 5) {
            $(".site-header").addClass("site-header-active");
        } else {
            $(".site-header").removeClass("site-header-active");
        }
    });

    // Header Active
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 5) {
            $(".filter-history-sorting-section").addClass("sorting-section-active");
        } else {
            $(".filter-history-sorting-section").removeClass("sorting-section-active");
        }
    });

    //Search Filter
    $('.search-filter').select2({
        width: 'resolve',
        minimumResultsForSearch: -1
    });

    //Open Filtors for Mobile View
    $('#filterBtnMob').click(function() {
        $('.search-filter-mobileView').slideDown();
        $("body").css({ "overflow-y": "hidden" });
    });

    $('button[data-filter="seeFiltersResults"]').click(function() {
        $('.search-filter-mobileView').slideUp();
        $("body").css({ "overflow-y": "unset" });
    });

    // Search Filter for YEAR, PRICE, MILEAGE
    $("#price-range").slider({
        range: true,
        min: 0,
        max: 200000,
        values: [0, 200000],
        slide: function(event, ui) {
            $("#minPrice").val("$" + ui.values[0]);
            $("#maxPrice").val("$" + ui.values[1]);
        }
    });
    $("#priceRange").val("$" + $("#price-range").slider("values", 0) + " - $" + $("#price-range").slider("values", 1));

    $("#miles-range").slider({
        range: true,
        min: 0,
        max: 100000,
        values: [0, 100000],
        slide: function(event, ui) {
            $("#minMiles").val(ui.values[0]);
            $("#maxMiles").val(ui.values[1]);
        }
    });
    $("#milesRange").val($("#miles-range").slider("values", 0) + $("#miles-range").slider("values", 1));

    $("#year-range").slider({
        range: true,
        min: 1980,
        max: 2023,
        values: [1980, 2023],
        slide: function(event, ui) {
            $("#minYear").val(ui.values[0]);
            $("#maxYear").val(ui.values[1]);
        }
    });
    $("#yearRange").val($("#year-range").slider("values", 0) + $("#year-range").slider("values", 1));


    //toggle inventory list view and grid view
    $(document).on('click', '*[data-view="changeView"]', function() {
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            $(this).find('span').text('Comfortable View');
        } else {
            $(this).find('span').text('Compact View');
        }

        $('.vehicleInventoryBox').toggleClass('active');
    });

    $('[data-toggle="tooltip"]').tooltip();


    //Find Dealer
    $('[data-toggle="tooltip"]').tooltip();

    $('.dealer-map-grid-title-card').on('click', function() {
        $(".dealer-map-grid-wrapper").removeClass("active");
        $(this).parents(".dealer-map-grid-wrapper").addClass("active");
    });
    $('.close-dealer-card').on('click', function() {
        $(".dealer-map-grid-wrapper").removeClass("active");
    });

    $('.close-dealer-card').on('click', function() {
        $(".dealer-detail-card-outer").removeClass('d-flex');
        $(".dealer-detail-card-outer").addClass('d-none');
    });
    $('.dealer-map-grid-title-card').on('click', function() {
        $(".dealer-detail-card-outer").removeClass('d-none');
        $(".dealer-detail-card-outer").addClass('d-flex');
    });

    $('.dealer-map-grid-wrapper-fix').on('scroll', function() {
        if ($(this).scrollTop() > 50) {
            $(".dealer-detail-card-fixed").addClass("dealer-detail-card-fixed-active");
            $(".close-dealer-card-hide").addClass("d-none");
        } else {
            $(".dealer-detail-card-fixed").removeClass("dealer-detail-card-fixed-active");
            $(".close-dealer-card-hide").removeClass("d-none");
        }
    });

    $('.review-slider').slick({
        infinite: true,
        loop: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        responsive: [{
                breakpoint: 950,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 555,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.year-slider').slick({
        infinite: false,
        loop: false,
        slidesToShow: 8,
        slidesToScroll: 1,
        dots: false,
        responsive: [{
                breakpoint: 767,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 610,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('ul.nav-pills').on('click', function(event, tab) {
        $('.galleryCarousel').slick('refresh');
        $('.galleryCarousel-nav').slick('refresh');
    });

    var gallery = $('.galleryCarousel');

    gallery.slick({
        loop: false,
        nav: true,
        dots: false,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        useTransform: true,
        cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
    });

    $('.galleryCarousel-nav')
        .on('init', function(event, slick) {
            $('.galleryCarousel-nav .slick-slide.slick-current').addClass('is-active');
        })
        .slick({
            slidesToShow: 8,
            slidesToScroll: 8,
            dots: false,
            focusOnSelect: false,
            infinite: false,
            arrows: false,
            useTransform: true,
            cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 10,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 767,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 2,
                    vertical: false
                }
            }, {
                breakpoint: 420,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    vertical: false
                }
            }]
        });

    $("[data-toggle='gallery']").on('click', function() {
        $('#researchGallerySlider').toggleClass('show');
        $('.galleryCarousel').slick('refresh');
        $('.galleryCarousel-nav').slick('refresh');
    })

    $("[data-toggle='search']").on('click', function() {
        $('#research-form').toggleClass('show');
    })

    // Available Brand Slider 
    jQuery('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        jQuery('.brands-slider').slick('setPosition');
    });
    // brand js
	jQuery('.brands-slider').slick({
		dots: false,
		arrows: true,
		infinite: true,
		speed: 300,
		centerMode: true,
		centerPadding: '0px',
		slidesToShow: 9,
		slidesToScroll: 9,
		responsive: [{
			breakpoint: 1200,
			settings: {
			  slidesToShow: 5,
			  slidesToScroll: 5
			}},
			{
			breakpoint: 992,
			settings: {
			  slidesToShow: 4,
			  slidesToScroll: 4
			}},
			{
			  breakpoint: 768,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}},
		  {
			breakpoint: 600,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 2
			}},
		  {
			breakpoint: 480,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 2
			}}]
	});

    
    // Home Page Blog
    jQuery('.blogSlider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Home Page Grid
    jQuery('.gridSlider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    
    // Home Page Grid
    jQuery('.gridSlider2').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    jQuery('.compareSlider').slick({
        dots: false,
        arrows: true,
        prevArrow: $("#compPrev"),
            nextArrow: $("#compNext"),
        infinite: true,
        speed: 300,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }},
            {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }},
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }},
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }}]
      });

});
