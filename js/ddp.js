jQuery(document).ready(function($) { 

    $('#datetimepicker1').datetimepicker();

    // $(window).on('load', function() {
    //     $('#leadForm').modal('show');
    // });

    $('.dealer-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        adaptiveHeight: true,
        infinite: true,
		loop: true,
        pauseOnHover: false,
        cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
    });

	$('.modal').on('shown.bs.modal', function (e) {
		$('.dealer-slider').slick('setPosition');
	})

    $('#selectService').on('change', function() {
        if(this.value == 'vehicle finance') {
            $('#serviceInfo').hide();
            $('#financeInfo').slideDown();
        }
        if(this.value == 'vehicle service') {
            $('#financeInfo').hide();
            $('#serviceInfo').slideDown();
        }
    })

})