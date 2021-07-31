// JavaScript Document

$(document).ready(function() {

	$(document).ready(function() {
		$('.js-example-basic-multiple').select2();
	});

	var $heightTest = $('.header').outerHeight();
	$(".top-space").height($heightTest);

	$(window).resize(function() {
		$(".top-space").height($heightTest);
	});


    /* scroll to bottom js start */
	$(window).scroll(function(){
		if ($(this).scrollTop() > 120) {
			$('.header').addClass('fixed');
		} else {
			$('.header').removeClass('fixed');
		}
	});
	
$('.travel-slider').slick({
	dots: false,
	infinite: false,
	speed: 300,
	slidesToShow: 3,
	slidesToScroll: 3,
	arrows: false,
	// nextArrow: '<div class="slick-next slick-arrow"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16.54 26.18" style="enable-background:new 0 0 16.54 26.18;" xml:space="preserve"> <path class="st0" fill="#FFFFFF" d="M16.54,13.09L3.45,26.18L0,22.73l9.64-9.64L0,3.45L3.45,0L16.54,13.09z"/> </svg></div>',
	// prevArrow: '<div class="slick-prev slick-arrow"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16.54 26.18" style="enable-background:new 0 0 16.54 26.18;" xml:space="preserve"> <path class="st0" fill="#FFFFFF" d="M16.54,3.45L6.9,13.09l9.64,9.64l-3.45,3.45L0,13.09L13.09,0L16.54,3.45z"/> </svg></div>',

	responsive: [
	  {
		breakpoint: 1024,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 2,
		  infinite: true,
		}
	  },
	  {
		breakpoint: 600,
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
	/* scroll to bottom js end */


	
	// filter dropdown js
	$(".select-size ul li a").on('click', function (e) {
		var selText = $(this).text();
		$(".filter-block #size").val(selText);
		$(".filter-block .select-size").slideUp();
		console.log(selText);
		e.preventDefault();
	});
	
	$(".filter-block #size").on('click', function () {
		$(this).next('.select-size').slideToggle();
		// $(".filter-block .select-size").slideToggle();
	});
	$(".filter-block .close-btn").on('click', function () {
		$(this).parent('.select-size').slideUp();
		// $(".filter-block .select-size").slideUp();
	});
	$(".filter-block #size1").on('click', function () {
		$(this).next('.select-size').slideToggle();
		// $(".filter-block .select-size").slideToggle();
	});
	$(".filter-block .close-btn").on('click', function () {
		$(this).parent('.select-size').slideUp();
		// $(".filter-block .select-size").slideUp();
	});

	$(".filter-block .done-btn").on('click', function () {
		$(this).parent('.select-location').slideUp();
		// $('.filter-block #location').parent().removeClass('location-active');
		// $(".filter-block .select-location").slideUp();
	});
	


	
	
	// filter more option 
	$(".filter-right .plus-btn").on('click', function (e) {
		$('.filter-block.bottom-block').slideToggle();
		$(this).toggleClass('active');
		// $(".filter-block .price-range").slideUp();
		e.preventDefault();
	});
	// filter more option 
	
	
	
	// datepicker 
	$('.date-input').datepicker({		
		format: 'M dd. yyyy',	
		toolbarPlacement: 'bottom',
		showClose: true,
		autoclose: true,
		closeBtn: true,
		clearBtn: true,
		orientation: "top auto",
		orientation: "bottom auto",
		
	});
	// $('.date-input1').datepicker({		
	// 	format: 'M dd. yyyy',	
	// 	toolbarPlacement: 'bottom',
	// 	showClose: true,
	// 	autoclose: true,
	// 	closeBtn: true,
	// 	clearBtn: true,
	// 	orientation: "top auto",
	// 	orientation: "bottom auto",
		
	// });
	$('#date-input').datepicker().on('show', function(){
		// $('.prev').html('<svg version="1.1" id="Layer_1"  x="0px" y="0px" viewBox="0 0 8 15.9" style="enable-background:new 0 0 8 15.9;" xml:space="preserve"><path class="st0" fill="#424242" d="M7.1,15.8L0.6,9.3C0.2,8.9,0,8.6,0,8.1c0-0.5,0.2-0.9,0.6-1.2L7,0.1C7.2,0,7.6,0,7.8,0.1S8,0.8,7.8,1L1.3,7.5 C1.2,7.7,1.1,7.8,1.1,8c0,0.2,0.1,0.4,0.2,0.5l6.5,6.5c0.2,0.2,0.2,0.6,0,0.8c-0.1,0.1-0.3,0.2-0.4,0.2S7.2,15.9,7.1,15.8z"/></svg>');
		// $('.next').html('<svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 8 15.9" style="enable-background:new 0 0 8 15.9;" xml:space="preserve"><path class="st0" fill="#424242" d="M0.6,15.9c-0.1,0-0.3-0.1-0.4-0.2c-0.2-0.2-0.2-0.6,0-0.8l6.5-6.5C6.8,8.4,6.8,8.1,6.8,8c0-0.2-0.1-0.3-0.2-0.5 L0.2,1c-0.2-0.2-0.2-0.6,0-0.8s0.6-0.2,0.8,0l6.4,6.7C7.8,7.2,8,7.6,8,8.1S7.8,8.9,7.4,9.3l-6.5,6.5C0.8,15.9,0.7,15.9,0.6,15.9z"/></svg>');
		
		$('td.old, td.new').addClass('disabled');
		
		// $('.datepicker-dropdown').append('<div class="close-btn"></div>');
	});
	
	// datepicker 




	$(".select-arrow").click(function(){
		$(".dropdown-custom").toggleClass();
	});
	
	$(".select-form .plus-btn").click(function(e){
		$('textarea').toggleClass('height-big').animate();
		$(this).toggleClass('active');
		e.preventDefault();
		
	});

	

	// header mobile
	// $('.mobile-menu-burger a.burger').click(function () {
	// 	$(this).toggleClass('open');
	// 	$('.h-bottom').toggleClass('open');
	// });

	$(".mobile-menu-burger a.burger").click(function() {
		$(this).toggleClass('open');
		// $(".h-bottom ul li").slideToggle('fast');
		$('.h-bottom').toggleClass('show');
		$("body").toggleClass('modal-open');
	})
	
	


	
	$(".open-modal").on('click', function(e){
		$(".contact-form-modal").addClass("open");
		$("body").addClass('modal-open');
		e.preventDefault();
	});
	$(".contact-form-modal .close-btn").on('click', function(e){
		$(".contact-form-modal").removeClass("open");
		$("body").removeClass('modal-open');
		e.preventDefault();
	});


	$('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
	
	$(document).ready(function() {
		$(".counter__increment, .counter__decrement").click(function(e)
		{
			var $this = $(this);
			var $counter__input = $(this).parent().find(".counter__input");
			var $currentVal = parseInt($(this).parent().find(".counter__input").val());
			e.preventDefault();
			
			if ($currentVal != NaN && $this.hasClass('counter__increment'))
			{
				$counter__input.val($currentVal + 1);
			}
			else if ($currentVal != NaN && $this.hasClass('counter__decrement'))
			{
				if ($currentVal >= 1) {
					$counter__input.val($currentVal - 1);
				}
			}
		});
	});

	$('.chatbox .help-bx').click(function () {
        $(".chatbox").toggleClass("open");
        // $('.nav').toggleClass('open');

    });
});
