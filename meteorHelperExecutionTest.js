MyColl = new Meteor.Collection('myColl',{connection: null});




if (Meteor.isClient) {


  Meteor.startup(function(){

    Session.setDefault('rerun',0);

  });


  // helper reactivity test
  Template.layerOne.myHelper = function () {
    Session.get('rerun');
    console.log('layerOne name is:'+ this.myName, 'additionalValue: '+this.additionalValue);
  };
  Template.layerTwo.myHelper = function () {
    Session.get('rerun');
    console.log('layerTwo name is:'+ this.myName, 'additionalValue: '+this.additionalValue);
  };


  // show the items
  Handlebars.registerHelper('getTemplate', function(values){
    return Template[values.hash.template].withData({
      myName:values.hash.template,
      additionalValue: values.hash.value
    });
  });



  // trigger buttons
  Template.main.events({
    'click button.rerunHelper' : function () {
      Session.set('rerun',Math.random(0,99));
    }
  });

}
