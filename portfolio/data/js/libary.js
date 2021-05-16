// ===== Venobox =====
$(document).ready(function(){
    $('.venobox').venobox({
        framewidth : '900px',                            // default: ''
        frameheight: 'auto',                            // default: ''
        border     : '2px',                             // default: '0'
        bgcolor    : '#ffffff',                          // default: '#fff'
        titleattr  : 'data-title',                       // default: 'title'
        numeratio  : true,                               // default: false
        infinigall : true,                               // default: false
        share: ['facebook', 'twitter', 'download'], // default: []
        spinner: 'rotating-plane',
      spinColor: '#695aa6'
    }); 
});

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
