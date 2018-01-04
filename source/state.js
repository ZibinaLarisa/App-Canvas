 
import Context from './context';


 class State extends Context {

  constructor(elem) {
    super(elem);

     this.localSt = window.localStorage;

     this.stepArray = [];
     this.step = -1;

  }	  

	saveImg() {    
      this.localSt.setItem('canvasName', canvas.toDataURL());
    }

  loadImg() {
   
      let dataURL = this.localSt.getItem('canvasName');
      this.getImage(dataURL);
         
    }

  push_(canvas) {    
      this.step++
      this.stepArray.push(canvas.toDataURL());      
    }

  back() {     
      if (this.step >0) {
          this.step--  
          this.getImage(this.stepArray[this.step]);   
      }    
    }     

  forward()  {
      if (this.step < this.stepArray.length-1) {
          this.step++
           this.getImage(this.stepArray[this.step]);            
       }
    }

  getImage(source){
        let img = new Image();      
        img.src = source;      
        img.onload= () => this.redraw(this.ctx, img);

      }    
}

export default State
