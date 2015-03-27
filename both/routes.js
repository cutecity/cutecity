Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', function () {
  this.render('home');
}, {
  name: 'home'
});

Router.route('/edit/new', function () {
  this.render('editorNew');
}, {
  name: 'editor.new'
});

// #TODO:

// Router.route('/edit/:name', function () {
//   this.render('editor')
// }, {
//   name: 'editor.edit'
// });

// Router.route('/city', function () {
//   this.render('city');
// }, {
//   name: 'city.new'
// });

// Router.route('/gallery', function () {
//   this.render('gallery');
// }, {
//   name: 'gallery'
// });
