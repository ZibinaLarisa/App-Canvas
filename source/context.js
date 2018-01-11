
import BaseCanvas from './baseCanvas';
import { relativePos } from './index';


class Context extends BaseCanvas {
     constructor(elem, strokeStyle = '#1eb3e3', lineWidth = '10') {
        super(elem);
        
        this.strokeStyle = strokeStyle;
        this.lineWidth = lineWidth;        
        this.drawing = false;
        this.prevX = 0;
        this.prevY = 0;
        this.firstpos = 0;
        
    }  

    beginPath (ctx, e) {
        this.drawing = true;
        this.firstpos = relativePos(e, this.canvas);        
        [this.prevX, this.prevY] = [this.firstpos.x, this.firstpos.y];        
    }

    
     
    draw (ctx, e) {
       
        if (!this.drawing){
            return;
        }
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.strokeStyle = this.strokeStyle;
        ctx.lineWidth = this.lineWidth;

        ctx.beginPath();
        ctx.moveTo(this.prevX, this.prevY);

        this.firstpos = relativePos(e, this.canvas);
        
        ctx.lineTo(this.firstpos.x, this.firstpos.y);
        ctx.stroke(); 
        [this.prevX, this.prevY] = [this.firstpos.x, this.firstpos.y];

    }     

    closePath(ctx) { 
        this.drawing = false;       
        ctx.closePath();        
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