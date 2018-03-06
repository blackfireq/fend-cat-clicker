//first kiity info
// const firstKittyImage = document.querySelector('.first-kitty-image');
// const firstKittyCounter = document.querySelector('.first-kitty-counter');
// const firstKittyName = document.querySelector('.first-kitty-name');
// let firstKittyNumOfClicks = 0;
// //second kitty info
// const secondKittyImage = document.querySelector('.second-kitty-image');
// const secondKittyCounter = document.querySelector('.second-kitty-counter');
// const secondKittyName = document.querySelector('.second-kitty-name');
// let secondKittyNumOfClicks = 0;
//
//
// //update names of both kitties
// firstKittyName.textContent = 'George';
// secondKittyName.textContent = 'Alfred';
//
// // add eventlistener for click on the first kitty Image
// firstKittyImage.addEventListener('click', function(){
//   // update the numOfClicks
//   firstKittyNumOfClicks++;
//   // update kittyCounter
//   firstKittyCounter.textContent = firstKittyNumOfClicks;
// });
//
// // add eventlistener for click on the second kitty Image
// secondKittyImage.addEventListener('click', function(){
//   // update the numOfClicks
//   secondKittyNumOfClicks++;
//   // TODO: update kittyCounter
//   secondKittyCounter.textContent = secondKittyNumOfClicks;
// });


// <article class="kitty second-kitty">
//   <header class="">
//     <p class="second-kitty-counter">00</p>
//     <p class="second-kitty-name"></p>
//   </header>
//   <img class="second-kitty-image" src="http://bit.ly/2tizU3c">
// </article>

class Cat {
  constructor(name, pic){
    this.name = name;
    this.pic = pic;
    this.count = 0;
  }

  updateCount(){
    this.count++;
  }
}

//cat info
const catName = [
  'Joe',
  'Bob',
  'Alice',
  'Burt',
  'Joan'
];

const catPic = [
  'http://bit.ly/2jOOA5M',
  'https://i.ytimg.com/vi/vQFiRqUcaf8/hqdefault.jpg',
  'https://i.ytimg.com/vi/UThxF0Nz-l0/hqdefault.jpg',
  'http://bit.ly/2oT8Yl7',
  'https://i.ytimg.com/vi/AnyGoYmuP7g/hqdefault.jpg'
]

//build cats
let allCats = [];

for(let i = 0; i < catName.length; i++){
  allCats.push(new Cat(catName[i],catPic[i]));
}


//build cards in aside
for(let i = 0; i < 5; i++){
  document.querySelector('aside').append(function() {

    //card
    let cardElement = document.createElement('article');
    cardElement.classList.add('card');
    cardElement.classList.add('cat'+i);

    //header for name and count
    let headerElement = document.createElement('header');

    //name
    let nameElement = document.createElement('p');
    nameElement.classList.add('name');
    nameElement.textContent = allCats[i]['name'];
    headerElement.append(nameElement);

    //count
    let counterElement = document.createElement('p');
    counterElement.classList.add('counter');
    counterElement.textContent = allCats[i]['count'];
    headerElement.append(counterElement);

    //img
    let imageElement = document.createElement('img');
    imageElement.setAttribute('src', allCats[i]['pic']);

    //append to cardElement
    cardElement.append(headerElement);
    cardElement.append(imageElement);

    return cardElement;
  }());
}
// populate main area with the first cat
document.querySelector('main').append(function() {
  let cardElement = document.createElement('article');
  cardElement.classList.add('main-card');

  //get and set header headerElement
  let headerElement = document.createElement('header');
  headerElement.classList.add('main-header');

  //name
  let nameElement = document.createElement('p');
  nameElement.classList.add('main-name');
  nameElement.textContent = allCats[0]['name'];
  headerElement.append(nameElement);

  //counter
  let counterElement = document.createElement('p');
  counterElement.classList.add('main-count');
  counterElement.textContent = allCats[0]['count'];
  headerElement.append(counterElement);

  //pic
  let imageElement = document.createElement('img');
  imageElement.setAttribute('src', allCats[0]['pic']);

  //append to cardElement
  cardElement.append(headerElement);
  cardElement.append(imageElement);


  return cardElement;
}());

// add click eventlistener
document.querySelector('aside').addEventListener('click', function(event){
  console.log(`you clicked ${event.target.nodeName}`);
  //make sure you cliked on name
  if(event.target.nodeName == 'P' && event.target.classList.contains('name')){

    //cycle through cats to match name
    allCats.forEach( function(cat){
      if(cat['name'] === event.target.textContent){
        //update count
        cat['count']++;
        //assign name
        document.querySelector('.main-name').textContent = cat['name'];
        //assign count
        document.querySelector('.main-count').textContent = cat['count'];
        event.target.nextSibling.textContent = cat['count'];
        //assign pic
        document.querySelector('main img').setAttribute('src',cat['pic']);
      }
    });
  }

});
