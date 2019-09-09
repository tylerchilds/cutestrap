initToolbarToggles();
updateRhythmBackgroundImage();

function initToolbarToggles() {
    const html = document.querySelector('html');

    const settings = {
        theme: 'light',
        grid: 'off',
        rhythm: 'normal'
    };

    const toggles = [...document.querySelectorAll('.js-toolbar-toggle')];

    const handleToolbarToggle = ({target}) => {
        const key = target.dataset.key;
        const value = target.dataset.value;
        html.dataset[key] = value;

        localStorage.setItem(key, value);
        updateRhythmBackgroundImage();
    };

    toggles.map(toggle => {
        toggle.addEventListener('click', handleToolbarToggle);
    });

    Object.keys(settings).map(key => {
        const value = localStorage.getItem(key) || settings[key];
        html.dataset[key] = value;
    });
}

function updateRhythmBackgroundImage() {
    const body = document.querySelector('body');
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext('2d');

    const rhythm = parseFloat(window.getComputedStyle(body).getPropertyValue('line-height'));
    const color =  window.getComputedStyle(body).getPropertyValue('--color-neutral-tint2');
    canvas.height = rhythm;
    console.log(rhythm)
    canvas.width = rhythm;

    ctx.fillStyle = 'transparent';
    ctx.fillRect(0, 0, rhythm, rhythm);

    ctx.fillStyle = color;
    ctx.fillRect(0, rhythm - 1, rhythm, 1);

    return body.style.backgroundImage = `url(${canvas.toDataURL()}`;
}
