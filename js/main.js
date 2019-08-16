const html = document.querySelector('html');
const body = document.querySelector('body');

initGridlineToggle();
initThemeToggles();
initRhythmToggles();
updateRhythmBackgroundImage();
blockForms();

function initGridlineToggle() {
    const target = document.querySelector('.js-grid-toggle');

    if(localStorage.getItem('grid') === "true"){
        body.classList.add('hide-gridlines');
    }

    target.addEventListener('click', function(){
        localStorage.setItem('grid', 
            body.classList.toggle('hide-gridlines') // returns true or false
        );
        updateRhythmBackgroundImage();
    });
}

function initThemeToggles() {
    const toggles = [...document.querySelectorAll('.js-theme-toggle')];

    const handleThemeToggle = ({target}) => {
        const selectedTheme = target.dataset.theme;
        html.dataset.theme = selectedTheme;

        localStorage.setItem('theme', selectedTheme);
        updateRhythmBackgroundImage();
    };

    toggles.map(toggle => {
        toggle.addEventListener('click', handleThemeToggle);
    });

    if(localStorage.getItem('theme')){
        html.dataset.theme = localStorage.getItem('theme');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

function initRhythmToggles() {
    const html = document.querySelector('html');
    const toggles = [...document.querySelectorAll('.js-rhythm-toggle')];

    const handleRhythmToggle = ({target}) => {
        const selectedRhythm = target.dataset.rhythm;
        html.dataset.rhythm = selectedRhythm;

        localStorage.setItem('rhythm', selectedRhythm);
        updateRhythmBackgroundImage();
    };

    toggles.map(toggle => {
        toggle.addEventListener('click', handleRhythmToggle);
    });

    if(localStorage.getItem('rhythm')){
        html.dataset.rhythm = localStorage.getItem('rhythm');
    } else {
        localStorage.setItem('rhythm', 'normal');
    }
}

function updateRhythmBackgroundImage() {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext('2d');
  
    const rhythm = parseFloat(window.getComputedStyle(body).getPropertyValue('line-height'));
    const color =  window.getComputedStyle(body).getPropertyValue('--cs-color-gray5');
    canvas.height = rhythm;
    console.log(rhythm)
    canvas.width = rhythm;
  
    ctx.fillStyle = 'transparent';
    ctx.fillRect(0, 0, rhythm, rhythm);
  
    ctx.fillStyle = color;
    ctx.fillRect(0, rhythm - 1, rhythm, 1);
  
    return body.style.backgroundImage = `url(${canvas.toDataURL()}`;
}

function blockForms() {
    document.querySelectorAll('form').forEach(function(node) {
        node.addEventListener('submit', function(e){
            e.preventDefault();
        }); 
    });
}