$(document).ready(function() {
  $('.future-section--js').waypoint(function(direction){
    if(direction == 'down') {
      $('nav').addClass('sticky animated fadeInDown'); 
    } else {
      $('nav').removeClass('sticky fadeInDown');
    }
  },{
    offset: '55px'
  })

})


// Smooth scrolling

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

// Animation
$('.wp-1').waypoint(function(direction) {
    $('.wp-1').addClass('animated fadeIn')
}, {
    offset: '50%'
})

$('.wp-2').waypoint(function(direction) {
    $('.wp-2').addClass('animated bounceInUp')
}, {
    offset: '50%'
}) 

$('.wp-3').waypoint(function(direction) {
    $('.wp-3').addClass('animated fadeIn')
}, {
    offset: '50%'
})

$('.wp-4').waypoint(function(direction) {
    $('.wp-4').addClass('animated plush')
}, {
    offset: '50%'
}) 
