$('button').click(function(e) {
  $('.card').addClass('show');
});

$('.card .close').click(function(e) {
  $(e.target).parents('.card').removeClass('show');
});
