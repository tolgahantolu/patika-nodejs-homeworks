const { Schema, model } = require('mongoose');

const PostSchema = new Schema({
  title: String,
  detail: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

const Post = model('post', PostSchema);

module.exports = Post;
