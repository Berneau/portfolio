const triangleLength = 50;
var draw, dimensions, cd;

document.addEventListener("DOMContentLoaded", onDomload);
window.addEventListener('resize', onWindowResize);

function onDomload() {
  initSvg();
  highlightRandomTriangle();
}

function initSvg() {
  draw = SVG('anchor-landing');
  drawTriangles();
}

function drawTriangles() {
  dimensions = getWindowDimensions();
  clearTriangles();
  
  for (var i = 0; i < dimensions.width; i+=triangleLength) {
    drawTrianglePair(draw, triangleLength, i, 0);
    for (var j = 0; j < dimensions.height; j+=triangleLength) {
      drawTrianglePair(draw, triangleLength, i, j);
    }
  }
}

function drawTrianglePair(draw, length, x, y) {
  // upper triangle
  drawTriangle([x, y, x + length, y, x + length, y + length]);
  // lower triangle
  drawTriangle([x, y, x + length, y + length, x, y + length]);
}

function drawTriangle(arr) {
  var rnd = getRandomColor();
  draw.polyline(arr).fill(rnd.color).addClass(rnd.class).addClass('triangle');
}

function clearTriangles() {
  draw.clear();
}

function getRandomColor() {
  const colors = [
    '#272a32',
    '#292c34',
    '#2b2e36',
    '#2d3038'
  ];
  const classes = ['grey-0', 'grey-1', 'grey-2', 'grey-3'];
  var idx = getRandomNumber(colors.length);
  return { color: colors[idx], class: classes[idx] };
}

function getWindowDimensions() {
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  return { width: w, height: h };
}

function onWindowResize() {
  cooldown(drawTriangles);
}

function cooldown(func) {
  clearTimeout(cd);
  cd = setTimeout(function() {
    console.log('test');
    func();
  }, 250);
}

function highlightRandomTriangle() {
  var triangle = getRandomTriangle();
  triangle.classList.add('active');
  setTimeout(function() {
    triangle.classList.remove('active');
  }, 1000);
  
  setTimeout(highlightRandomTriangle, getRandomNumber(2500, 500));
}

function getRandomTriangle() {
  var triangles = document.getElementsByClassName('triangle');
  return triangles[getRandomNumber(triangles.length - 1)];
}

function getRandomNumber(max, min = 0) {
  return Math.floor(Math.random() * max) + min;
}



