function randoInt (min, max) {
  // Pick random interger between min & max, excluding the max
  return Math.floor(Math.random() * (max - min)) + min;
}

if (Meteor.isClient) {

  var bgurls = [
    '/images/bg/sprouts.jpg',
    '/images/bg/transplants.jpg',
    '/images/bg/garden.jpg',
  ]

  // Pick random background image 
  Template.landingPage.helpers({
    bgurl: function () {
      // debugger;
      return bgurls[randoInt(0, bgurls.length)];
    }
  });

  Template.landingPage.events({
//nothing to see here...
  });
}