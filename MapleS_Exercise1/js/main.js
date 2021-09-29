/**
References
Franks laboratory: https://www.youtube.com/watch?v=0v4_Dw0K8pw&list=PLYElE_rzEw_siuo-kkHh5h7Sk--6IPYNh&index=5
-July 16, 2021

*/

window.onload = function() {
  // get the canvas
  let canvas = document.getElementById("testCanvas");
  //a
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  //get the context
  let context = canvas.getContext("2d");



class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speedX = (Math.random() * 4) - 2; // random btw -2 & +2
    this.speedY = (Math.random() * 4) - 2; //  object come out in all directions
    this.maxSize = (Math.random() * 7) + 5;
    this.size = (Math.random() * 1) + 2;
    this.fillColor = '#fff';

    this.localCanvasContext = context;
  }

  update() {
    this.x += this.speedX; // +values moves to right, -values to left
    this.y += this.speedY; // +values moves down, -values mores up
    this.size += 0.1;

    // new object as long as size is less than maxSize
    if (this.size < this.maxSize) {
      this.localCanvasContext.beginPath();
      this.localCanvasContext.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      this.localCanvasContext.fillStyle = this.fillColor;
      this.localCanvasContext.fill();
      this.localCanvasContext.stroke();
      // remind what 'this' is refering to
      requestAnimationFrame(this.update.bind(this));
      this.localCanvasContext.closePath();
    }
  }
}

window.addEventListener('mousemove', function(event) {
  let ball = new Ball(event.x, event.y);
  ball.update();
})





// resize event that resents objects
window.addEventListener('resize', function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

}
