const kittyImage = document.querySelector('.kitty-image');
const kittyCounter = document.querySelector('.kitty-counter');
let numOfClicks = 0;

// add eventlistener for click on the kittyImage
kittyImage.addEventListener('click', function(){
  // update the numOfClicks
  numOfClicks++;
  // TODO: update kittyCounter
  kittyCounter.textContent = numOfClicks;
});
