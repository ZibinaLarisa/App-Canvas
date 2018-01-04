
import State  from './state';
import { getElem } from './index';

class UserController extends State { 

    constructor(elem) {
        super(elem);

        this.init();        
    }

    init() {    

        this.setListenersCanvas();
        this.setListenersUtils();

    }

    setListenersCanvas() {
       
        canvas.addEventListener('mousedown', e => this.drawing = true /*[this.prevX, this.prevY] = [e.offsetX, e.offsetY]*/);
        canvas.addEventListener('mousemove', e => this.draw(this.ctx, e));
        canvas.addEventListener('mouseup',(e) => {
            this.drawing = false;
            this.push_(canvas);
        });
        canvas.addEventListener('mouseout',() => this.drawing = false);
        canvas.addEventListener('mousedown', (e)  => {
            this.drawing = true;
            [this.prevX, this.prevY] = [e.offsetX, e.offsetY];
        });
     

    }

    setListenersUtils(){

        let clearArea = getElem('clear'),
            chooseColor = getElem('color'),
            widthLine = getElem('line-width'),
            save = getElem("saveImg"),
            load = getElem("loadImg"),
            undo = getElem("Undo"),
            redo = getElem("Redo"); 

        chooseColor.addEventListener('change', e => this.renewColor(chooseColor));        
        widthLine.addEventListener('change', e => this.renewWidth(widthLine));
        clearArea.addEventListener('click', e => this.clear());
        save.addEventListener('click', e => this.saveImg()); 
        load.addEventListener('click', e => this.loadImg());
        undo.addEventListener('click', e => this.back());                                                 
        redo.addEventListener('click', e => this.forward());   
    }    
}

export default UserController