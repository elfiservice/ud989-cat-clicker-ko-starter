var Cat = function() {
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Taddy');
  this.imgSrc = ko.observable('img/22252709_010df3379e_z.jpg');
  this.nicknames = ko.observableArray(['Tabtab', 'Mr. T']);

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

  this.currentCat = ko.observable( new Cat());

  this.incrementCounter = function() {
    this.currentCat().clickCount(this.currentCat().clickCount() + 1);
  };
}

ko.applyBindings(new ViewModel());
