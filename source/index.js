import save from './save';
import init from './change';
import './main.css';

const canvas = document.querySelector('canvas'),
ctx = canvas.getContext('2d'),
clearArea = document.querySelector(".clear"),      
chooseColor = document.querySelector(".color"),
widthLine = document.querySelector(".line-width"); 

canvas.width = 800;
canvas.height = 600;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.strokeStyle = "#1eb3e3";
ctx.lineWidth = 10;

init(canvas, ctx);
save(canvas, ctx);

let prevX = 0,
prevY = 0,
drawing = false;

const draw = (e) => {
    if(!drawing){
      return;
    }
    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [prevX, prevY] = [e.offsetX, e.offsetY];
  }

   //change color, width, clear canvas

    const renewColor = () => {    
      ctx.strokeStyle = chooseColor.value;
    }

    const renewWidth = () => {
      ctx.lineWidth = widthLine.value;
    }
  
    const clear = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }


    
chooseColor.addEventListener('change', renewColor);
widthLine.addEventListener('change', renewWidth);
clearArea.addEventListener('click', clear);     
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseout', e => {drawing = false; });
canvas.addEventListener('mouseup', e => {drawing = false; });
canvas.addEventListener('mousedown', e => {drawing = true;  [prevX, prevY] = [e.offsetX, e.offsetY];});
  

