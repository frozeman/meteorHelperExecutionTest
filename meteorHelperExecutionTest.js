MyColl = new Meteor.Collection('myColl',{connection: null});




if (Meteor.isClient) {


  Meteor.startup(function(){

    Session.setDefault('rerun',0);

  });


  // helper reactivity test
  Template.layerOne.myHelper = function () {
    Session.get('rerun');
    console.log('layerOne helper rerun');
  };
  Template.layerTwo.myHelper = function () {
    Session.get('rerun');
    console.log('layerTwo helper rerun');
  };


  // show the items
  Handlebars.registerHelper('getTemplate', function(templateName){
    return Template[templateName].withData({my:'data'});
  });



  // trigger buttons
  Template.main.events({
    'click button.rerunHelper' : function () {
      Session.set('rerun',Math.random(0,99));
    }
  });

}
