jQuery(document).ready(function($) {
    $('.owl-carousel-1').owlCarousel({
        loop:true,
        margin:20,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        autoWidth:true,
        merge:true,
        rtl:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
    $('.owl-carousel-2').owlCarousel({
        loop:true,
        margin:20,
        autoplay:true,
        autoplayTimeout:3500,
        autoplayHoverPause:true,
        autoWidth:true,
        merge:true,
        rtl:true,
        responsive:{
            0:{
                items:1,
                rtl:false,
            },
            600:{
                items:2,
                rtl:false,
            },
            1000:{
                items:3
            }
        }
    })
})

