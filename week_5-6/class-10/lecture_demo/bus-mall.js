var BusMallImage = function(fileName) {
  this.fileName = fileName;
  this.totalVotes = 0;
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
  addImages();
}

window.addEventListener('load', addImages);
