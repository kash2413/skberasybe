$(document).ready(function(){
    var aTop = $('header').height();

    if($(window).scrollTop()>=aTop){
        $('header').addClass("sticky");
    }

    var animating = false;
    $(window).scroll(function(){
        
        if($(this).scrollTop()>=aTop){
            $('header').addClass("sticky");
        }else{
            $('header').removeClass("sticky");
        }
    });

    $('nav ul li a, .link-scroll').on('click', function(e){
        e.preventDefault();
        $('header nav').removeClass('visible');
        
        var targ = $(this).attr('data-target');
        $('#' + targ).velocity('scroll', {
            duration: 800,
            offset: -50,
            easing: 'easeInOutSine',
            complete: function(){
                
            }
        });

    });

    $('.btn-mobile-menu').on('click', function(e){
        e.preventDefault();

        $('header nav').toggleClass('visible');
    });
    

    $('.box-contact-form').on('submit', '#frm-contactForm', function(e) {
        e.preventDefault();

        if (!Nette.validateForm(this))
            return;

        document.getElementById("frm-contactForm-submit").disabled = true;

        $(this).ajaxSubmit(function(payload) {
            if (payload.success === true) {
                $('.box-contact-form form').fadeOut(550, function(){
                    $('.afterSend').fadeIn(250);
                });
            }
        });
    });

    $('.js-btn-close').on('click', function(e){
        e.preventDefault();
        $('.Popover').hide();
        $('header, .Section').show();
        $('#sluzby').velocity('scroll', {
            duration: 0,
            easing: 'easeInOutSine'
        });
    });
    $('.js-show-popover').on('click', function(e){
        e.preventDefault();
        var target = $(this).attr('data-target');
        $('header, .Section').hide();
        $('#popover-' + target).show();
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });

    $('.btn-subpage').on('click', function(e){
        e.preventDefault();
        var target = $(this).attr('data-target');

        $('header, .Section').hide();
        $('.subpage--' + target).show();
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });

    $('.js-btn-close-subpage').on('click', function(e){
        e.preventDefault();
        var target = $(this).attr('data-target');
       
        $('header, .Section').show();
        $('.subpage').hide();

        var scrollTarget = '';
        if($(this).hasClass('pojazdne')){
            scrollTarget = 'kaviarne';
        }else if($(this).hasClass('kaviaren')){
            scrollTarget = 'kamenna-kaviaren';
        }
        if(scrollTarget != ''){
            $('#' + scrollTarget).velocity('scroll', {
                duration: 0,
                easing: 'easeInOutSine'
            });
        }
        
    });

    

    
});