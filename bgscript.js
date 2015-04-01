function randoInt (min, max) {
  // Pick random interger between min & max, excluding the max
  return Math.floor(Math.random() * (max - min)) + min;
}

if (Meteor.isClient) {

  var bgurls = [
    '/images/bg/sprouts.jpg',
  ]

  // Pick random background image 
  Template.home.helpers({
    bgurl: function () {
      // debugger;
      return bgurls[randoInt(0, bgurls.length)];
    }
  });

  Template.home.events({
    // 'click button': function () {
    //   // increment the counter when button is clicked
    //   Session.set("counter", Session.get("counter") + 1);
    // }
  });
}