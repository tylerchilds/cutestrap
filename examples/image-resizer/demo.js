import {
  loadFile,
  getResizedImageFromFile
} from './image-resizer.js';

(function(){
  const elements = {
    imageInput: document.getElementById("image-input"),
    results: document.querySelector(".image-results"),
    original: document.getElementById("original"),
    resized: document.getElementById("resized"),
  }

  async function onImageSelection() {
    const file = this.files && this.files[0];

    const originalImage = await loadFile(file).catch(console.error);
    const resizedImage = await getResizedImageFromFile(file, 480).catch(console.error);

    elements.original.src = originalImage;
    elements.resized.src = resizedImage.dataURL;

    console.log('resized image:', resizedImage);

    elements.results.classList.remove('hidden');
  }

  elements.imageInput.addEventListener("change", onImageSelection);
})();