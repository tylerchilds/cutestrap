if(localStorage.getItem('grid') === "true"){
  $('html').addClass('grid--is_active');
}

$(function(){
  $("form").on('submit', function(e){
    e.preventDefault();
  });
});

$(document).on('click', '.js-grid-toggle', function(){
  $('html').toggleClass('grid--is_active');
  localStorage.setItem('grid', $('html').is('.grid--is_active'));
});
