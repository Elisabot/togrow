
// Router.configure({
// 	// the default layout
// 	layoutTemplate: 'layout'
// });

Router.route('/', function () {
  this.render('home');
});


Router.route('/email', function () {
  this.render('email');

});