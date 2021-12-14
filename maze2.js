
;(function () {
  const canvas = document.getElementById('myCanvas')
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = 1500 ;

function drawPixel(x, y, color) {
    var roundedX = Math.round(x);
        var roundedY = Math.round(y);
  
        ctx.beginPath();
        ctx.fillStyle = color || '#000';
        ctx.fillRect(roundedX, roundedY, 1, 1);
        ctx.fill();
    }

var colors = ['#f9f9ed', '#f9f9d2', '#edeba2', '#ede972', '#e2c650', '#cc9742', '#bc7733', '#cba6a35', '#b75735', '#a54a2f', '#9b3c26', '#892c1d', '#7a2117', '#631610', '#4c0e0b', '#380707'
            , '#4c0e0b', '#631610', '#7a2117', '#892c1d', '#9b3c26', '#a54a2f', '#b75735', '#cba6a35', '#bc7733', '#cc9742', '#e2c650', '#edeba2', '#f9f9d2', '#f9f9ed' ];







function distanceToOrigin (x,y){
 
  return Math.sqrt((x*x) + (y*y))

}




var width = ctx.canvas.width;
var height = ctx.canvas.height;













for (var y=0; y <height; ++y){

  for (var x=0; x <width; ++x){


    // puts the x and y coordinated into the middle by subtracting half of the canvas width 
    // then it makes it so that the x and y is always between - and + 2 
    var newX = ((x-(width/2))/width)*4;
    var newY = ((y-(height/2))/height)*4;



  var color = 'black';

  //fractal itteration values 
  var fracX = 0.5;
  var fracY = 0.5
  ;


  for (var i=0; i<100;i++){

    // makes the fractal make the shapes 
    var newFracX = (fracX*fracX)-(fracY*fracY)+newX;
    var newFracY = (2*fracX*fracY)+ newY;

    var distance = distanceToOrigin(newFracX,newFracY);

    //if the distance is less than 2 it will cycle through the colours and leave the loop 
    if (distance>2){
      color = colors[i%colors.length];
      break;
    }

    // x and y keeps going up to make us keep itterating 
    fracX = newFracX;
    fracY = newFracY;





  }
  

  drawPixel (x,y, color);





  }




}









})()































//https://jonisalonen.com/2013/lets-draw-the-mandelbrot-set/


