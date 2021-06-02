// ==== Loading =====
$(window).on('load', function () {
    $('.loading').fadeOut(700, function () {
        $(this).remove();
    });
});

// ========= Sid Bar Animation ==========
$('.btn-menu').click(function () {
    $('.side-bar').animate({ marginRight: 0 });
});

$('.btn-hide').click(function () {
    $('.side-bar').animate({ marginRight: '-100%' });
})


// ========== Scroll-up Btn ==========
$(document).ready(function () {
    
    let screenHeight = $(window).height();
    console.log(screenHeight);

    $(window).scroll(function () {
        let currPosition = $(this).scrollTop();
        if (currPosition > screenHeight-150) {
            $('.btn-up').removeClass("btn-scroll");
        } else {
            $('.btn-up').addClass("btn-scroll");
        }
    })
});





