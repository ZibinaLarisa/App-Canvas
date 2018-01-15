import Context from './context';

class State extends Context {
    constructor(elem) {
        super(elem);
        this.localSt = window.localStorage;
        this.step = 0;
        this.stepArray = [];
        this.stepArray.push(canvas.toDataURL());
    }

    saveImg() {
        this.localSt.setItem('canvasName', canvas.toDataURL());
    }

    loadImg() {
        const dataURL = this.localSt.getItem('canvasName');
        this.getState(dataURL);
    }

    saveState(canvas) {
        if (this.step !== this.stepArray.length - 1) {
            this.stepArray.splice(this.step + 1, this.stepArray.length - this.step - 1);
        }
        this.stepArray.push(canvas.toDataURL());
        this.step += 1;
    }

    undo() {
        if (this.step > 0) {
            this.step -= 1;
            this.getState(this.stepArray[this.step]);
        }
    }

    redo() {
        if (this.step < this.stepArray.length - 1) {
            this.step += 1;
            this.getState(this.stepArray[this.step]);
        }
    }

    getState(source) {
        const img = new Image();
        img.src = source;
        img.onload = () => this.redraw(this.ctx, img);
    }
}

export default State;
