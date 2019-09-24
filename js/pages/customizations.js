import getBlobURL from '../helpers/getBlobUrl.js';
import boilerplate from '../helpers/boilerplate.js';
import getStyles from '../helpers/getStyles.js';

init();

function init() {
  const inputs = document.querySelectorAll('#customization-form select, #customization-form input');

  [...inputs].map(el => {
    el.addEventListener('change', render)
  });

  render();
}

function render() {
  const config = getConfig();
  const template = boilerplate(getConfig());

  document.getElementById('css-sourcecode').innerHTML = config.css;
  document.getElementById('customizer-demo').src = getBlobURL(template, 'text/html');
  document.getElementById('boilerplate-sourcecode').innerHTML = template;
}

function getConfig() {
  const theme = document.getElementById('theme').value;
  const layout = document.getElementById('layout').value;
  const rhythm = document.getElementById('rhythm').value;
  const lineHeight = document.getElementById('line-height').value;
  const responsive = document.getElementById('responsive').checked;

  return {
    css: getStyles({
      theme,
      layout,
      rhythm, 
      lineHeight,
      responsive
    })
  }
}
