// ==== Loading =====
$(window).on('load', function () {
    $('.loading').fadeOut(600, function () {
        $(this).remove();
    });
});

// ========================

$(document).ready(function () {
    
    let screenHeight = $(window).height();
    $(window).scroll(function () {
        let currPosition = $(this).scrollTop();
        if (currPosition > screenHeight-150) {
        //    console.log("Hello Steak House")
        } else {
            setActive('home');
        }
    })
});


function setActive(x) {
    $('.nav-link').removeClass("current");
    $(`.nav-link[href='#${x}']`).addClass("current");
}

function navScroll() {
    let currentSection = $("section[id]");
    currentSection.waypoint(function (direction) {
        if (direction == "down") {
            let currentSection = $(this.element).attr('id');
            setActive(currentSection);
        }
    }, { offset: '120px' });
    
     currentSection.waypoint(function (direction) {
         if (direction == "up") {
             let currentSection = $(this.element).attr('id');
             setActive(currentSection);
         }
     },{ offset: '20px'});
}

navScroll();






