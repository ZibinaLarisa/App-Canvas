
export default class Input {
  constructor() {
  	
    this.chooseColor = document.querySelector(".color");
	this.widthLine = document.querySelector(".line-width");
	
	
	this.chooseColor.addEventListener('change', (e) => { this.renewColor() });
	this.widthLine.addEventListener('change', (e) => { this.renewWidth() });
	
	}

	renewColor(strokeStyle){
  		return strokeStyle = this.chooseColor.value;  		
		}

	renewWidth(lineWidth){
  		return lineWidth = this.widthLine.value;
		}
	
}


