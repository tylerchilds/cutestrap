/*
  Private API
*/

async function getImageElement(imageSource) {
  return await new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject({ reason: 'getImageElement: Image Load Error' });
    image.src = imageSource;
  })
}

async function getMime(imageSource) {
  const image = await fetch(imageSource);
  return (await image.blob()).type;
};

function getResizedDimensions(elem, maxDimensionSize) {
  // This code has high complexity, don't dwell on it too much
  // I wrote it like this to keep what really matters more simplified
  const 
    [ bigSide, smallSide ] = elem.width > elem.height ?
    ['width', 'height']:
    ['height', 'width'];

  // if big side is smaller than our max dimension, then pass dimensions through
  if(maxDimensionSize > elem[bigSide] || !maxDimensionSize){
    return {
      [bigSide]: elem[bigSide],
      [smallSide]: elem[smallSide]
    }
  }

  return {
    [bigSide]: maxDimensionSize,
    [smallSide]: maxDimensionSize / elem[bigSide] * elem[smallSide]
  }
}

function createCanvasImage(imageElement, dimensions) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext('2d');

  canvas.width = dimensions.width;
  canvas.height = dimensions.height;

  ctx.drawImage(imageElement, 0, 0, dimensions.width, dimensions.height);

  return canvas;
}

/*
  Public API
*/

export async function loadFile(file) {
  console.log(file)
  return await new Promise((resolve, reject) => {
    const fileReader = new FileReader();

    fileReader.onload = (e) => resolve(e.target.result);
    fileReader.onabort = () => reject({ reason: 'loadFile: File Read Aborted' });
    fileReader.onerror = () => reject({ reason: 'loadFile: File Read Error' });

    fileReader.readAsDataURL(file);
  });
}

export async function resizeImage(imageSource, maxDimensionSize) {
  const mime = await getMime(imageSource);
  const imageElement = await getImageElement(imageSource);
  const dimensions = getResizedDimensions(imageElement, maxDimensionSize);

  const image = createCanvasImage(imageElement, dimensions);

  return {
    blob: await new Promise((resolve) => {
      image.toBlob(blob => resolve(blob), mime, 1);
    }),
    dataURL: image.toDataURL(mime, 1)
  }
}

export async function getResizedImageFromFile(file, maxDimensionSize) {
  return await new Promise(async (resolve, reject) => {
    const imageSource = await loadFile(file).catch((e) => reject(e));
    const resizedImage = await resizeImage(imageSource, maxDimensionSize).catch(((e) => reject(e)));

    resolve(resizedImage);
  });
}

export default getResizedImageFromFile;