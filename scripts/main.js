
$(document).ready(function(){
	"use strict";

	var window_width 	 = $(window).width(),
	window_height 		 = window.innerHeight,
	header_height 		 = $(".default-header").height(),
	header_height_static = $(".site-header.static").outerHeight(),
	fitscreen 			 = window_height - header_height;
	
	
	$(".fullscreen").css("height", window_height)
	$(".fitscreen").css("height", fitscreen);

    //-------- Active Sticky Js ----------//
     $(".sticky-header").sticky({topSpacing:0});


    // Add smooth scrolling to Menu links
     $(".nav-link, .dropdown-ct a").on('click', function(event) {
            if (this.hash !== "") {
              event.preventDefault();
              var hash = this.hash;
              $('html, body').animate({
                scrollTop: $(hash).offset().top - (-10)
            }, 600, function(){
             
                window.location.hash = hash;
            });
        } 
    });





    //--------- Banner Content Carousel ---------//

    $('.active-banner-carousel').owlCarousel({
        loop: true,
        nav: true,
        navText: ['<i class="fa fa-caret-left""></i>', '<i class="fa fa-caret-right""></i>'],
        dots: true,
        items: 1,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        animateIn: 'slideInLeft',
        animateOut: 'slideOutRight'
    })

    //--------- About Content Carousel ---------//

    $('.active-about-carousel').owlCarousel({
        loop: true,
        nav: true,
        navText: ['<i class="fa fa-caret-left""></i>', '<i class="fa fa-caret-right""></i>'],
        dots: true,
        items: 1,
        autoplay:true,
        autoplayTimeout:2500,
        autoplayHoverPause:true,
        animateIn: 'slideInRight',
        animateOut: 'slideOutLeft'
    })

    //--------- Category Carousel ---------//

    $('.active-category-carousel').owlCarousel({
        loop: true,
        nav: true,
        navText: ['<i class="fa fa-caret-left""></i>', '<i class="fa fa-caret-right""></i>'],
        dots: true,
        items: 1,
        animateIn: 'slideInRight',
        animateOut: 'slideOutLeft'
    })

    //--------- Book Review Carousel ---------//

    $('.active-testimonial-carousel').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        autoplay: true,
        autoplayTimeout:2500,
        autoplayHoverPause:true,
        animateIn: 'slideInRight',
        animateOut: 'slideOutLeft'
    })
    
    //--------- Book Inside Page Carousel ---------//


    $('.navbar-collapse a').on('click', function(e) {
        $('.navbar-collapse').collapse('toggle');
      });


    // -------   Mail Send ajax

    $(document).ready(function() {
        var form = $('#myForm'); // contact form
        var submit = $('.submit-btn'); // submit button
        var alert = $('.alert'); // alert div for show alert message

        // form submit event
        form.on('submit', function(e) {
            e.preventDefault(); // prevent default form submit

            $.ajax({
                url: 'mail.php', // form action url
                type: 'POST', // form submit method get/post
                dataType: 'html', // request type html/json/xml
                data: form.serialize(), // serialize form data
                beforeSend: function() {
                    alert.fadeOut();
                    submit.html('Sending....'); // change submit button text
                },
                success: function(data) {
                    alert.html(data).fadeIn(); // fade in response data
                    form.trigger('reset'); // reset form
                    submit.html(''); // reset submit button text
                },
                error: function(e) {
                    console.log(e)
                }
            });
        });
    });
});
