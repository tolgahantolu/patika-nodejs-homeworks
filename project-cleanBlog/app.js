const express = require('express');
const { connect } = require('mongoose');
const methodOverride = require('method-override');
const Post = require('./models/Post');

const ejs = require('ejs');
const postController = require('./controllers/postControllers');
const pageController = require('./controllers/pageControllers');

const app = express();

//! CONNECT DB
connect('mongodb://localhost/cleanblog-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//! TEMPLATE ENGINE
app.set('view engine', 'ejs');

//! MIDDLEWARE
app.use(express.static('public'));

// Form aracılığıyla tarayıcıya gönderilen veriyi okumak için gerekli middleware'ler - (önceden body parser modülü kullanılırdı) 👇
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);

//! ROUTES
app.get('/', postController.getAllPosts);
app.get('/post', postController.getPost);
app.get('/posts/:id', postController.getPostDetails);
app.get('/about', pageController.getAboutPage);
app.get('/add_post', pageController.getAddPostPage);
app.get('/posts/edit/:id', pageController.getEditPage);

app.post('/posts', postController.createPost);

app.put('/posts/:id', postController.updatePost);

app.delete('/posts/:id', postController.deletePost);

const port = 3000 || process.env.PORT;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
