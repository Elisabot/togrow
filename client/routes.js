

Router.route('/', function () {
  if (Meteor.userId() === null) {
  	this.render('landingPage');
  } else { 
  	this.render('registerZip');
  };
});

Router.route('/home', function () {
  this.render('home');
});

Router.route('/reg', function () {
  this.render('registerZip');
});

