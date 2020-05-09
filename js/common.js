$(document).ready(function() {


    $(".menu-btn").on("click", function(){
        $(".overlay").toggle();
        $("nav").slideToggle(200);
    });

    $(".overlay").on("click", function(){
        $(".overlay").hide();
        $("nav").slideUp(200);
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 97) {
            $('nav').addClass("fixed-header");
        } else {
            $('nav').removeClass("fixed-header");
        }
    });

    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });


    $(".contact-form").submit(function() {
        var form_data = $(this).serializeArray();
        $.ajax({
            type: "POST",
            url: "../../mail.php",
            data: form_data,
            success: function() {
                $('.popup-with-form').click();
            },
            error: function(error) {
                $('.popup-with-form').click();
                console.log(error);
            }
        });
        return false;
    });

    $('.popup-with-form').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#name',

        // When elemened is focused, some mobile browsers in some cases zoom in
        // It looks not nice, so we disable it:
        callbacks: {
            beforeOpen: function() {
                if($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#name';
                }
            }
        }
    });

    $('.single').slick({
        dots: true,
        arrows: false,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 20000,
    });
});