jQuery(document).ready(function() {
  jQuery('.skillbar').each(function() {
    jQuery(this).find('.skillbar-bar').animate({
      width: jQuery(this).attr('data-percent')
    }, 6000);
  });
});

$(document).ready(function() {
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== this.id) {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // (num) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 950, function() {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

$(document).ready(function() {
  var deviceAgent = navigator.userAgent.toLowerCase();
  var agentID = deviceAgent.match(/(iPad|iPhone|iPod)/i);
  if (agentID) {
    $('body').css('-webkit-overflow-scrolling', 'touch');
  }
});