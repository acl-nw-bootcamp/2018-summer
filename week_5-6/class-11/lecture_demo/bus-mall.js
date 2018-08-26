var BusMallImage = function(fileName) {
  this.fileName = fileName;
  this.label = fileName.substring(0, fileName.length - 4);
  this.y = 0; // y = total clicks
}

var images = [];
images.push(new BusMallImage('bag.jpg'));
images.push(new BusMallImage('banana.jpg'));
images.push(new BusMallImage('boots.jpg'));
images.push(new BusMallImage('chair.jpg'));
images.push(new BusMallImage('cthulhu.jpg'));
images.push(new BusMallImage('dragon.jpg'));
images.push(new BusMallImage('pen.jpg'));
images.push(new BusMallImage('scissors.jpg'));
images.push(new BusMallImage('shark.jpg'));
images.push(new BusMallImage('sweep.jpg'));
images.push(new BusMallImage('unicorn.jpg'));
images.push(new BusMallImage('usb.jpg'));
images.push(new BusMallImage('water_can.jpg'));
images.push(new BusMallImage('wine_glass.jpg'));

function addImages() {
  var container = document.getElementById('image-container');
  container.innerText = '';
  var image = document.createElement('img');
  var index = generateRandom(0, images.length);
  image.setAttribute('src', 'images/'+images[index].fileName);
  image.addEventListener('click', recordImageClick);
  container.appendChild(image);
  image = document.createElement('img');
  index = generateRandom(0, images.length);
  image.setAttribute('src', 'images/'+images[index].fileName);
  image.addEventListener('click', recordImageClick);
  container.appendChild(image);
  image = document.createElement('img');
  index = generateRandom(0, images.length);
  image.setAttribute('src', 'images/'+images[index].fileName);
  image.addEventListener('click', recordImageClick);
  container.appendChild(image);
}

function generateRandom(min, max) {
  return Math.floor((Math.random() * (max - min)) + min);
}

function recordImageClick(event) {
  console.log(event.target.src);
  images[0].y += 1;
  addImages();
}

images[0].y = 5;
images[1].y = 7;
images[2].y = 2;
images[3].y = 8;
images[4].y = 11;

window.addEventListener('load', addImages);
window.addEventListener('load', drawChart);
