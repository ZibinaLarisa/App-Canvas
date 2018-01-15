import State from './state';
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
        canvas.addEventListener('mousedown', e => this.beginPath(this.ctx, e));
        canvas.addEventListener('mousemove', e => this.draw(this.ctx, e));
        canvas.addEventListener('mouseup', () => {
            this.drawing = false;
            this.saveState(canvas);
        });
    }

    setListenersUtils() {
        const clearArea = getElem('clear'),
            chooseColor = getElem('color'),
            widthLine = getElem('line-width'),
            save = getElem('saveImg'),
            load = getElem('loadImg'),
            undo = getElem('Undo'),
            redo = getElem('Redo');

        chooseColor.addEventListener('change', () => this.renewColor(chooseColor));
        widthLine.addEventListener('change', () => this.renewWidth(widthLine));
        clearArea.addEventListener('click', () => this.clear());
        save.addEventListener('click', () => this.saveImg());
        load.addEventListener('click', () => this.loadImg());
        undo.addEventListener('click', () => this.undo());
        redo.addEventListener('click', () => this.redo());
    }
}

export default UserController;
