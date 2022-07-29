var $car = document.querySelector('img');

window.addEventListener('keydown', function () {
  if (event.keyCode === 40) {
    $car.className = 'f1-car rotate-south';
  } else if (event.keyCode === 38) {
    $car.className = 'f1-car rotate-north';
  } else if (event.keyCode === 37) {
    $car.className = 'f1-car rotate-west';
  } else if (event.keyCode === 39) {
    $car.className = 'f1-car';
  }
});

// clearInterval(moving);
var left = 10;
function moveCar() {
  left += 10;
  $car.style.left = left + 'px';
  if ($car.style.left === '1500px') {
    clearInterval(moving);
  }
}

var moving = setInterval(moveCar, 16);
