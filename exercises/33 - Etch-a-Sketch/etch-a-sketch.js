const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('.shake');
const MOVE_POINTER = 20;

const { width, height } = canvas;

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);
let hue = 0;

// canvas context
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_POINTER;

ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// pointer moving function
function movePointer(key) {
  switch (key) {
    case 'ArrowUp':
      y -= MOVE_POINTER;
      break;
    case 'ArrowRight':
      x += MOVE_POINTER;
      break;
    case 'ArrowDown':
      y += MOVE_POINTER;
      break;
    case 'ArrowLeft':
      x -= MOVE_POINTER;
      break;
    default:
      break;
  }
}

// draw function
function draw({ key }) {
  hue += 1;
  console.log(key);
  ctx.beginPath();
  ctx.moveTo(x, y);

  movePointer(key);

  ctx.lineTo(x, y);
  ctx.strokeStyle = `hsl(${hue + 20}, 100%, 50%)`;
  ctx.stroke();
}

// arrowkey event
function handleKey(e) {
  if (e.key.includes('Arrow')) {
    draw({ key: e.key });
  }
}

// clear board function
function clearCanvas() {
  canvas.classList.add('shake');
  ctx.clearRect(0, 0, width, height);
  canvas.addEventListener(
    'animationend',
    function () {
      canvas.classList.remove('shake');
    },
    { once: true }
  );
}

window.addEventListener('keydown', handleKey);
shakeButton.addEventListener('click', clearCanvas);
