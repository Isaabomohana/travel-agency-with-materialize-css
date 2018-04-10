(function($){
  $(function(){
    $('.sidenav').sidenav();
    $('.slider').slider();
    $('.scrollspy').scrollSpy();
    $('input.autocomplete').autocomplete({
      data: {
        "Paris": null,
        "London": null,
        "Amsterdam": null,
        "Berlin": null,
        "Hamburg": null,
        "München": null
      },
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space
