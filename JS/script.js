$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");

        }else{
            $('.navbar').removeClass("sticky");

        }
        if(this.scroll > 500){
            $('.sroll-up-btn').addClass("show");

        }
        else{
            $('.sroll-up-btn').removeClass("show");

        }

    });

    // slide up script 

    $('.sroll-up-btn').Click(function(){
        $('html').animate({scrollTop: 0});

    });



    // toogle menu/navbar script 

    $('.menu-btn').click(function(){
        $('.navbar .menu').toogleClass("active");
        $('.menu-btn i').toogleClass("active");

    });

    // typing animation script 

    var typed = new typed(".typing", {
        strings: ["Website Developer", "YouTuber", "Blogger", "Designer", "Freelancer"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });

    var typed = new typed(".typing-2", {
        strings: ["Website Developer", "YouTuber", "Blogger", "Designer", "Freelancer"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });




    // owl carousel script 

    $('.carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut:2000,
        autoplayHoverPause:true,
        responsive: {
            0:{
                items:1,
                nav: false
            },

            600:{
                items:2,
                nav: false
            },

            1000:{
                items:3,
                nav: false,
            }
        }

    });

});