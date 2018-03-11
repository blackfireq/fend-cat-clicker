
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

    this.clearAll();
    this.renderList();
    this.renderMain();
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
  },

  clearAll : function(){
    //clear list
    document.querySelector('ul').innerHTML = '';
    //clear main
  }
};

const viewAdmin = {
  init: function() {
    const adminBtn = document.querySelector('.admin');
    adminBtn.addEventListener('click', function(){
      viewAdmin.render();
      viewAdmin.toggleVis();
    });

    const cancelBtn = document.querySelector('.cancel');
    cancelBtn.addEventListener('click', function(){
      viewAdmin.toggleVis();
    });

    const saveBtn = document.querySelector('.save');
    saveBtn.addEventListener('click', function(){
      viewAdmin.toggleVis();

      const name = document.querySelector('.edit-name').value;
      const pic = document.querySelector('.edit-pic').value;
      const count = parseInt(document.querySelector('.edit-count').value);
      octopus.updateCurrent(name,pic,count);
    });

  },

  render : function() {
    //get current cat
    let cat = octopus.getCurrent();

    //name
    const editName = document.querySelector('.edit-name');
    editName.value = cat.name;

    //pic
    const editPic = document.querySelector('.edit-pic');
    editPic.value = cat.pic;

    //count
    const editCount = document.querySelector('.edit-count');
    editCount.value = cat.count;
  },

  toggleVis : function() {
    const modal = document.querySelector('.modal');

    modal.classList.contains('hide') ?
      modal.classList.remove('hide') :
      modal.classList.add('hide');
  }
};

//control
const octopus = {
  init : function() {
    model.currentCat = model.cats[0];
    view.init();
    viewAdmin.init();

    //add clickListener for main
    document.querySelector('img').addEventListener('click', function(){
      octopus.incrementCount();
    });
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

  updateCurrent : function(name,pic,count){
    const cat = octopus.getCurrent();
    cat.name = name;
    cat.pic = pic;
    cat.count = count;
    view.init();
  },

  incrementCount : function() {
    model.currentCat.count++;
    view.renderMain();
  }
};

octopus.init();
