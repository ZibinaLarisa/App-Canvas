
export default function init(canvas, ctx) {
  const undo = document.querySelector(".Undo"),
  redo = document.querySelector(".Redo");
  //localSt = window.localStorage;
  
  let stepArray = [];
  let step = -1;

  canvas.addEventListener('mouseup', push);

  function push() {       
      step++
      stepArray.push(canvas.toDataURL());           
    }

    const back = () => {     
      if (step >0) {
          step--           
          let img = new Image();      
          img.src = stepArray[step];      
          img.onload= () => { 
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0);
          }
      }     
    }

    const forward = () => {
      if (step < stepArray.length-1) {
          step++           
          let img = new Image();      
          img.src = stepArray[step];      
          img.onload= () => { 
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0);
          }
      }     
    }  
    
     undo.addEventListener('click', back);                                                 
     redo.addEventListener('click', forward);  
}


