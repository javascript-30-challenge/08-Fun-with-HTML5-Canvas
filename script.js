const canvas = document.querySelector('#draw');
const color = document.querySelector('#color');
const stroke = document.querySelector('#stroke');
const reset = document.querySelector('#reset');
const bgcolor = document.querySelector('#bg-color');
const background = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
ctx.lineJoin = "bevel";
ctx.lineCap = "round";
ctx.lineWidth = 0;

let drawing = false;
let lastX = 0;
let lastY = 0;

const draw = (e) => {
    if(!drawing) return;
    console.log(e)
    ctx.beginPath();
    ctx.moveTo(lastX,lastY);
    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.stroke();
    [lastX,lastY] = [e.offsetX,e.offsetY];
}

canvas.addEventListener('mousedown', (e) => {
    ctx.strokeStyle = `${color.value}`;
    ctx.lineWidth = `${stroke.value}`;
    drawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', (e) => {
    drawing = false;
});
canvas.addEventListener('mouseout', () => drawing = false);

reset.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
});

const pickBackground = () => {
    background.style.background = bgcolor.value;
}