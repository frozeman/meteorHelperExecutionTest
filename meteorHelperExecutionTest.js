MyColl = new Meteor.Collection('myColl',{connection: null});




if (Meteor.isClient) {


  Meteor.startup(function(){

    // fill the collection with two types of items,
    // to be able to switch them in the each helper
    for (var i = 0; i < 20; i++) {
      MyColl.insert({
        myItemId: _.uniqueId(),
        random: Math.floor(Math.random() * 1000),
        type: 'type1'
      });
    };
    for (var i = 0; i < 20; i++) {
      MyColl.insert({
        myItemId: _.uniqueId(),
        random: Math.floor(Math.random() * 1000),
        type: 'type2'
      });
    };


    Session.setDefault('itemType','type1');
    Session.setDefault('itemSorting','myItemId');


    // just update the session every second
    Meteor.setInterval(function(){
      Session.set('countUp', new Date().getSeconds());
    },1000);


  });


  Template.main.items = function () {
    var sort = {sort:{}};
    sort.sort[Session.get('itemSorting')] = 1;
    return MyColl.find({type: Session.get('itemType')},sort);
  };

  Template.main.events({
    'click button.switchItems' : function () {
      if(Session.equals('itemType','type1'))
        Session.set('itemType','type2');
      else
        Session.set('itemType','type1');
    },
    'click button.switchSorting' : function () {
      if(Session.equals('itemSorting','myItemId'))
        Session.set('itemSorting','random');
      else
        Session.set('itemSorting','myItemId');
    }
  });


  Template.itemTemplate.countUp = function () {
    console.log('countedup');
    return Session.get('countUp');
  };

}
