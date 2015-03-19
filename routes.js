
// Router.configure({
// 	// the default layout
// 	layoutTemplate: 'layout'
// });

Router.route('/', function () {
  this.render('home');
});

Router.route('/index', function () {
  this.render('index');
});