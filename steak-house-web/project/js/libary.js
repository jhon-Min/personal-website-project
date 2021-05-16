//======== WOW JS =========
  wow = new WOW(
  {
  boxClass:     'wow',      // default
  animateClass: 'animate__animated', // default
  offset:       0,          // default
  mobile:       true,       // default
  live:         true        // default
}
)
wow.init();

// ==== Slick =====
$('.about-slide').slick({
     arrows: false,
     dots: true,
     infinite: true,
     speed: 300,
});
 

// ===== Venobox =====
$(document).ready(function(){
    $('.venobox').venobox({
        framewidth : '800px',                            // default: ''
        frameheight: 'auto',                            // default: ''
        border     : '2px',                             // default: '0'
        bgcolor    : '#ffffff',                          // default: '#fff'
        titleattr  : 'data-title',                       // default: 'title'
        numeratio  : true,                               // default: false
        infinigall : true,                               // default: false
        share: ['facebook', 'twitter', 'download'], // default: []
        spinner: 'double-bounce'
    }); 
});


// ===== Isotope =====
// $('.gallery .row').isotope({
  
//   itemSelector: '.item',
//   layoutMode: 'fitRows'
// });

$('.gallery-link ul li').click(function () {
    $('.gallery-link ul li').removeClass('select-img');
    $(this).addClass('select-img');

    // var selector = $(this).attr('data-filter');
    // $('.gallery .row').isotope({
        // filter: selector
    // });
    // return false;
});

