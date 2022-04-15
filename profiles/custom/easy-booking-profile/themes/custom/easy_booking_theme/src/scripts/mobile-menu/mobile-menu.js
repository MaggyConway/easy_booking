(function ($, Drupal) {
  $(document).ready(function() {
    $(".mobile-hamburger-wrapper").click(function(e){
      $(this).toggleClass('open');
      $(".menu-cart-wrapper").toggleClass('open');
      $("body").toggleClass('lock');
    });
  })
})(jQuery, Drupal);