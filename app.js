// to start app 'nodemon app'in terminal

const express = require('express');
const morgan = require('morgan');

// express app
const app = express();

// listen for requests
app.listen(3000);

//midleware static files - files which browser can see/render/access everyting in public folder can be seen from frontEnd
app.use(express.static('public'));


// //middleware morgan - logger
// app.use(morgan('dev'));

// //create middleware
// app.use((req, res, next) =>{
//   console.log(('new request made:'));
//   console.log(('host:', req.hostname));
//   console.log(('path:', req.path));
//   console.log(('method:', req.method));

//   //next() after req/res continue to next code
//   next();
// });


// register view engine
app.set('view engine', 'ejs');
// app.set('views', 'myviews');

app.get('/', (req, res) => {
  const blogs = [
    {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  ];
  res.render('index', { title: 'Home', blogs });
});
// app.use((req, res, next) =>{
//   console.log('in the next middleware');
//   next();
// });

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});