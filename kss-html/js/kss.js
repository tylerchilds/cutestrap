function createRhythmBackgroundImage(node) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext('2d');

  const rhythm = parseFloat(window.getComputedStyle(node).getPropertyValue('line-height'));
  canvas.height = rhythm;
  console.log(rhythm)
  canvas.width = rhythm;

  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, rhythm, rhythm);

  ctx.fillStyle = 'black';
  ctx.fillRect(0, rhythm - 1, rhythm, 1);

  return canvas.toDataURL();
}


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

  document.querySelectorAll('.rhythm').forEach(function(node) {
    const image = createRhythmBackgroundImage(node);
    node.style.backgroundImage = `url(${image})`;
  });
})();
