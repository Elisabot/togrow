
//Pogostick- User signs in/ registers and is sent to the zip registration form
//Scateboard- User signs in/ registers
	//initial sign in triggers zipcode registration form 
	//sent to home page once zip is recorded
Router.route('/', function () {
	//when user hits landing page, if logged in send to zip code registration
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

