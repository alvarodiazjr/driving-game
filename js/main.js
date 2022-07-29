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
