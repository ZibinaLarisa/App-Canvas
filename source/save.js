export default function save(canvas, ctx){

	const save = document.querySelector(".saveImg"),
    load = document.querySelector(".loadImg");

  function redraw(ctx, img){    	
    	ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
    }

	function saveImg() {
      window.localStorage.setItem('canvasName', canvas.toDataURL());
    }

    function loadImg() {
      var dataURL = localStorage.getItem('canvasName');
          var img = new Image;         
          img.src = dataURL;
          img.onload = () => redraw(ctx, img);          
    }

     save.addEventListener('click', saveImg); 
     load.addEventListener('click', loadImg); 
}

