import { getElem } from './index';

class BaseCanvas {

    constructor(elem, canvasWidth=800, canvasHeight=600) { 
        
        this.canvas = getElem(elem);
             
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = canvasWidth;
        this.canvas.height = canvasHeight;
        
    }

    clear() {
        this.ctx.clearRect(0, 0,  this.canvas.width, this.canvas.height);
    }
}

export default BaseCanvas