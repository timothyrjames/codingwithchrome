let drawing = false;
let lastX = -1;
let lastY = -1;
let lines = [];
let mouseX = -1;
let mouseY = -1;

function Line(x1, y1, x2, y2) {
  this.x1 = x1;
  this.x2 = x2;
  this.y1 = y1;
  this.y2 = y2;
}

onclick = function(evt) {
  let x = evt.x;
  let y = evt.y;
  if (drawing) {
    // this is ending the line
    lines.push(new Line(x, y, lastX, lastY));
    drawing = false;
  } else {
    // this is starting the line
    lastX = x;
    lastY = y;
    drawing = true;
  }
}

onmousemove = function(evt) {
  // collect the X & Y coordinates so we can show the line about to be drawn
  mouseX = evt.x;
  mouseY = evt.y;
}

setInterval(function() {
  draw.clear();
  for (let i = 0; i < lines.length; i++) {
    draw.line(lines[i].x1, lines[i].y1, lines[i].x2, lines[i].y2, 'black');
  }
  if (drawing) {
    // show the line about to be drawn
    draw.line(lastX, lastY, mouseX, mouseY, 'red');
  }
}, 50);
