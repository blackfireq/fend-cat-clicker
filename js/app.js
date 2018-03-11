
//Model

const model = {
  currentCat : null,
  cats : [
    {
      name : 'Joe',
      pic : 'http://bit.ly/2jOOA5M',
      count : 0
    },
    {
      name : 'Bob',
      pic : 'https://i.ytimg.com/vi/vQFiRqUcaf8/hqdefault.jpg',
      count : 0
    },
    {
      name : 'Alice',
      pic : 'https://i.ytimg.com/vi/UThxF0Nz-l0/hqdefault.jpg',
      count : 0
    },
    {
      name : 'Joan',
      pic : 'http://bit.ly/2oT8Yl7',
      count : 0
    },
    {
      name : 'Mark',
      pic : 'https://i.ytimg.com/vi/AnyGoYmuP7g/hqdefault.jpg',
      count : 0
    },
  ]
};

//View
const view = {
  init : function() {
    this.renderList();
    this.renderMain();

    //add clickListener for main
    document.querySelector('img').addEventListener('click', function(){

      octopus.incrementCount();
    });
  },

  renderList : function() {
    //get a link to the  list element
    const catList = document.querySelector('ul');

    //get list of cats
    cats = octopus.getList();

    //build list
    cats.forEach( function(cat){
      let listItem = document.createElement('li');
      listItem.textContent = cat.name;

      //add eventlistener to update main area
      listItem.addEventListener('click', function(Ccat) {
        return function() {
          octopus.setCurrent(Ccat);
          view.renderMain();
        }
      }(cat));

      //add to list
      catList.append(listItem);
    });
  },

  renderMain : function() {
    let cat = octopus.getCurrent();
    //name
    const nameElement = document.querySelector('.name');
    nameElement.textContent = cat['name'];

    //counter
    const counterElement = document.querySelector('.count');
    counterElement.textContent = cat['count'];

    //pic
    const imageElement = document.querySelector('img');
    imageElement.setAttribute('src', cat['pic']);
  }
};

const octopus = {
  init : function() {
    model.currentCat = model.cats[0];
    view.init();

  },
  getList : function() {
    return model.cats;
  },
  getCurrent : function() {
    return model.currentCat;
  },
  setCurrent : function(cat) {
    model.currentCat = cat;
  },
  incrementCount : function() {
    model.currentCat.count++;
    view.renderMain();
  }
};

octopus.init();
