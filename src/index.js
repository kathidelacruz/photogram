var page = require('page');

var main = document.getElementById('main-container')

page('/', function (ctx, next) {
  main.innerHTML = 'HOME <a href="/signup">Signup</a>';
})

page('/signup', function (ctx, next) {
  main.innerHTML = 'SIGNUP <a href="/">home</a>';
})

page.start();