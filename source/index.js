import Input from './change';
import './main.css';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const clearArea = document.querySelector(".clear");

canvas.width = 800;
canvas.height = 600;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.strokeStyle = "#1eb3e3";
ctx.lineWidth = 10;

let input = new Input();

let prevX = 0;
let prevY = 0;
let drawing = false;

const draw = (e) => {
    if(!drawing){
      return;
    }
    ctx.strokeStyle = input.renewColor(ctx.strokeStyle);
    ctx.lineWidth = input.renewWidth(ctx.lineWidth);
    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [prevX, prevY] = [e.offsetX, e.offsetY];
  }

const clear = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

clearArea.addEventListener('click', clear);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseout', e => {drawing = false;});
canvas.addEventListener('mouseup', e => {drawing = false;});
canvas.addEventListener('mousedown', e => {drawing = true;  [prevX, prevY] = [e.offsetX, e.offsetY];});
