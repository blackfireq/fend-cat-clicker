
//Model

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

//View

//build cards in aside
const view = {
  init : function(){
    view.buildAside();
    allCats.forEach(function(cat){
      view.buildCatCard(cat);
    });
    view.buildMain(allCats[0]);

    // add click eventlistener for aside
    document.querySelector('aside').addEventListener('click', function(event){
      //make sure you cliked on name
      if(event.target.nodeName == 'P'){
        //cycle through cats to match name
        allCats.forEach( function(cat){
          if(cat['name'] === event.target.textContent){
            //update count
            cat['count']++;
            //assign name
            document.querySelector('.main-name').textContent = cat['name'];
            //assign count
            document.querySelector('.main-count').textContent = cat['count'];
            //assign pic
            document.querySelector('main img').setAttribute('src',cat['pic']);
          }
        });
      }
    });

    //add clickListener for main
    document.querySelector('main').addEventListener('click', function(event){
      console.log('boom');
      //update counter
      allCats.forEach(function(cat){
        if(event.target.getAttribute('src') === cat['pic']){
          console.log('shooooo');
          document.querySelector('.main-count').textContent = ++cat['count'];
        }
      });
    });
  },

  buildAside : function() {
    //create aside to store a list of cats
    const aside = document.createElement('aside');

    //attach to body
    document.querySelector('body').append(aside);
  },

  buildCatCard : function(cat) {
    //card
    const cardElement = document.createElement('article');
    cardElement.classList.add('card');

    //name
    const nameElement = document.createElement('p');
    nameElement.textContent = cat['name'];
    cardElement.append(nameElement);

    //add to aside
    document.querySelector('aside').append(cardElement);
  },

  buildMain : function(cat){
    // populate main area with the first cat
    const cardElement = document.createElement('article');
    cardElement.classList.add('main-card');

    //get and set header headerElement
    const headerElement = document.createElement('header');
    headerElement.classList.add('main-header');

    //name
    const nameElement = document.createElement('p');
    nameElement.classList.add('main-name');
    nameElement.textContent = cat['name'];
    headerElement.append(nameElement);

    //counter
    const counterElement = document.createElement('p');
    counterElement.classList.add('main-count');
    counterElement.textContent = cat['count'];
    headerElement.append(counterElement);

    //pic
    const imageElement = document.createElement('img');
    imageElement.setAttribute('src', cat['pic']);

    //append to cardElement to card
    cardElement.append(headerElement);
    cardElement.append(imageElement);

    //build main element
    const mainElement = document.createElement('main');
    mainElement.append(cardElement);
    document.querySelector('body').append(mainElement);
  }
}

const octopus = {
  init : function() {
    view.init();
  },
  renderAside : function() {
    allCats.forEach( function(cat){
      view.buildAside(cat);
    });
  },
  renderMain : function() {
    view.buildMain(allCats[0]);
  }
};

octopus.init();
