
import BaseCanvas from './baseCanvas';


class Context extends BaseCanvas {
     constructor(elem, strokeStyle = '#1eb3e3', lineWidth = '10') {
        super(elem);
        
        this.strokeStyle = strokeStyle;
        this.lineWidth = lineWidth;
        
        this.drawing = false;
        this.prevX = 0;
        this.prevY = 0;
        
    }

    draw (ctx, e) {
        
        if(!this.drawing){
            return;
        }
        ctx.lineCap = "round"; 
        ctx.lineJoin = "round";

        ctx.strokeStyle = this.strokeStyle;
        ctx.lineWidth = this.lineWidth;
        ctx.beginPath();
        ctx.moveTo(this.prevX, this.prevY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        [this.prevX, this.prevY] = [e.offsetX, e.offsetY];
    }

    redraw(ctx, img){      
      this.clear();     
      ctx.drawImage(img, 0, 0);
    }

    renewColor (chooseColor) {        
        this.strokeStyle = chooseColor.value;       
    }

    renewWidth (widthLine) {
      this.lineWidth = widthLine.value;
    }    

}

export default Context;