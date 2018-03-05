//first kiity info
const firstKittyImage = document.querySelector('.first-kitty-image');
const firstKittyCounter = document.querySelector('.first-kitty-counter');
const firstKittyName = document.querySelector('.first-kitty-name');
let firstKittyNumOfClicks = 0;
//second kitty info
const secondKittyImage = document.querySelector('.second-kitty-image');
const secondKittyCounter = document.querySelector('.second-kitty-counter');
const secondKittyName = document.querySelector('.second-kitty-name');
let secondKittyNumOfClicks = 0;



//update names of both kitties
firstKittyName.textContent = 'George';
secondKittyName.textContent = 'Alfred';

// add eventlistener for click on the first kitty Image
firstKittyImage.addEventListener('click', function(){
  // update the numOfClicks
  firstKittyNumOfClicks++;
  // update kittyCounter
  firstKittyCounter.textContent = firstKittyNumOfClicks;
});

// add eventlistener for click on the second kitty Image
secondKittyImage.addEventListener('click', function(){
  // update the numOfClicks
  secondKittyNumOfClicks++;
  // TODO: update kittyCounter
  secondKittyCounter.textContent = secondKittyNumOfClicks;
});
