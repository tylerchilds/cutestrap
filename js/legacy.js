var $ = function(selector){
  return document.querySelectorAll(selector);
};

$html = $('html')[0];

var demo = {
  start: function(){
    if(localStorage.getItem('gridlines') === "true"){
      if ($html.classList)
        $html.classList.add('grid--is_active');
      else
        $html.className += ' ' + 'grid--is_active';
    }
  },

  toggle_grid: function(){
    
    if ($html.classList) {
      $html.classList.toggle('grid--is_active');
      localStorage.setItem('gridlines', $html.classList.contains('grid--is_active'));
    } else {
      var classes = $html.className.split(' ');
      var existingIndex = classes.indexOf('grid--is_active');

      if (existingIndex >= 0)
        classes.splice(existingIndex, 1);
      else
        classes.push('grid--is_active');

      $html.className = classes.join(' ');
      localStorage.setItem('gridlines', new RegExp('(^| )' + 'grid--is_active' + '( |$)', 'gi').test($html.className));
    }

  },

  prevent_form_submission: function(e){
    e.preventDefault();
  }
};

(function(){

  demo.start();

  for (var i = 0; i < $('form').length; i++) {
    $('form')[i].addEventListener('submit', demo.prevent_form_submission);
  }

  for (var i = 0; i < $('.js-grid-toggle').length; i++) {
    $('.js-grid-toggle')[i].addEventListener('click', demo.toggle_grid);
  }

})();
