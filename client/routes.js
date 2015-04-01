

Router.route('/', function () {
  this.render('home');
});

Router.route('/login', function () {
  this.render('login');
});

Router.route('/date', function () {
  this.render('getDate');
});
