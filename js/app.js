var initialCats = [
  {
    clickCount: 0,
    name: "Taddy",
    imgSrc: "img/22252709_010df3379e_z.jpg",
    nicknames: ['Juju', 'Toto']
  },
  {
    clickCount: 0,
    name: "Xanii",
    imgSrc: "img/434164568_fea0ad4013_z.jpg",
    nicknames: ['Arara', 'Coto', 'rubi']
  },
  {
    clickCount: 0,
    name: "Sammy",
    imgSrc: "img/9648464288_2516b35537_z.jpg",
    nicknames: ['Smmmm']
  }
];

var Cat = function(dataCats) {
  this.clickCount = ko.observable(dataCats.clickCount);
  this.name = ko.observable(dataCats.name);
  this.imgSrc = ko.observable(dataCats.imgSrc);
  this.nicknames = ko.observableArray(dataCats.nicknames);

  this.nivel = ko.computed(function(){
    var title;
    var clicks = this.clickCount();
    if (clicks < 10) {
      title = 'NewBorn';
    } else if (clicks < 20) {
      title = 'Child :)';
    } else if (clicks >= 20) {
      title = 'Teen :D';
    }
    return title;
  }, this);
};

var ViewModel = function() {
  //acessar o THis mais Externo
  var self = this;

  this.catList = ko.observableArray([]);
  initialCats.forEach(function(catObj){
    self.catList.push( new Cat(catObj) );
  });

  this.currentCat = ko.observable( this.catList()[0] );

  this.incrementCounter = function() {
    self.currentCat().clickCount(self.currentCat().clickCount() + 1);
  };

  //no DOM usa o $parent Para subir fora do contexto do CatObj para o ViewModel
  //clickedCatObj: Na Documentacao diz Q ao Clicar em Algo no DOM com bind
  //ele executa uma Funcao passando um OBJ q no qual ele esta Ligado
  this.setCat = function(clickedCatObj) {
    self.currentCat(clickedCatObj);
  }
}

ko.applyBindings(new ViewModel());
