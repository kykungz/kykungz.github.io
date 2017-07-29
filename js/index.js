$(function() {
  $(".sidebar.right").sidebar({side: "right"})

  $('[data-toggle="tooltip"]').tooltip();

  $(document).on('touchstart', function() {
    $('[data-toggle="tooltip"]').tooltip('hide');
    $(".sidebar.right").trigger("sidebar:close");
  });

  $("#hidden_images").hide();
  $("#hidden_images img").hide();

  $("#show_btn").on('click', function(e) {
    var offset = $(window).scrollTop();
    if ($('#show_btn_text').text() === 'Show more') {
      $('#show_btn_text').text('Hide');
      offset = $("#show_btn").offset().top;
    } else {
      $('#show_btn_text').text('Show more');
    }
    $('#show_btn_caret').toggleClass('fa-caret-down fa-caret-up');
    $("#hidden_images img").fadeToggle(800);
    $("#hidden_images").slideToggle(800);
    $('html, body').animate({
      scrollTop: offset - $('#hidden_images').height()
    }, 800);
  });

  // $("#myNavbar a").on('click', function(event) {
  //   event.preventDefault();
  //   $('#myCollapsible').collapse('hide');
  //   var hash = this.hash;
  //   $('html, body').animate({
  //     scrollTop: $(hash).offset().top - $("#home").attr('data-offset') + 1
  //   }, 800);
  // });

  $("#myNavbar a").on('click', function(event) {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top - $("#home").attr('data-offset') + 1
    }, 800);
  });

  $("#my-sidebar a").on('click', function(event) {
    event.preventDefault();
    $(".sidebar.right").trigger("sidebar:close");
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top - $("#home").attr('data-offset') + 1
    }, 800);
  });


  $(".contact").on('click', function(event) {
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top - $("#home").attr('data-offset') + 1
    }, 600);
  })

  $("#mobile-nav-btn").click(function() {
    $(".sidebar.right").trigger("sidebar:toggle");
  })
});
