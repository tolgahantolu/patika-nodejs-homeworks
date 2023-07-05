const express = require('express');
const { connect } = require('mongoose');
const methodOverride = require('method-override');

const ejs = require('ejs');
const Post = require('./models/Post');

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
app.get('/', async (req, res) => {
  const posts = await Post.find({});
  res.render('index', { posts });
});
app.get('/post', (req, res) => {
  res.render('post');
});
app.get('/about', (req, res) => {
  res.render('about');
});
app.get('/add_post', (req, res) => {
  res.render('add_post');
});
app.get('/posts/:id', async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render('post', {
    post,
  });
});

app.post('/posts', async (req, res) => {
  await Post.create(req.body);
  res.redirect('/');
});

app.get('/posts/edit/:id', async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id });
  res.render('edit', {
    post,
  });
});
app.put('/posts/:id', async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id });
  post.title = req.body.title;
  post.detail = req.body.detail;
  post.save();

  res.redirect(`/posts/${req.params.id}`);
});

app.delete('/posts/:id', async (req, res) => {
  await Post.findByIdAndRemove(req.params.id);
  res.redirect('/');
});

const port = 3000 || process.env.PORT;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
