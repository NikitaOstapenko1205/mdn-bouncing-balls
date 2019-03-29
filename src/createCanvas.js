const canvas = document.querySelector('canvas');
const canvasObj = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

export { canvasObj, width, height };
