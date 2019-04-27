(function(){
  const $html = document.querySelector('html');
  const $gridToggle = document.querySelector('.js-grid-toggle');

  $gridToggle.addEventListener('click', function(){
    localStorage.setItem('grid', 
      $html.classList.toggle('grid--is_active') // returns true or false
    );
  });

  if(localStorage.getItem('grid') === "true"){
    $html.classList.add('grid--is_active');
  }

  document.querySelectorAll('form').forEach(function(node) {
    node.addEventListener('submit', function(e){
      e.preventDefault();
    }); 
  });
})();
