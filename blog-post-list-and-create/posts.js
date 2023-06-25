const posts = [
  {
    title: "Backend Development Path",
    content: "lorem ipsum dolor sit amet",
  },
  {
    title: "Frontend Development Path",
    content: "lorem ipsum dolor sit amet",
  },
  {
    title: "Sofware Design Patterns",
    content: "lorem ipsum dolor sit amet",
  },
  {
    title: "SOLID Design Principles",
    content: "lorem ipsum dolor sit amet",
  },
];

//! async/await
const blogPostsList = () => {
  posts.map((post, i) => console.log(post.title));
};

const addBlogPost = (newPost) => {
  posts.push(newPost);
};

const updatedBlogPostsList = async () => {
  try {
    await addBlogPost({
      title: "New Post Title",
      content: "new post content",
    });
  } catch (error) {
    console.log(error.message);
  }
  blogPostsList();
};

updatedBlogPostsList();

//! Promise
//const blogPostsList = () => {
//  posts.map((post, i) => console.log(post.title));
//};
//
//const addBlogPost = (newPost) => {
//  return (promise = new Promise((resolve, reject) => {
//    posts.push(newPost);
//    resolve("Post added");
//    reject("Something went wrong");
//  }));
//};
//
//addBlogPost({ title: "New Post Title 232323", content: "new post content" })
//  .then((value) => {
//    blogPostsList();
//    console.log(value); // resolve: post added
//  })
//  .catch((err) => console.log(err)); // reject: something went wrong

//! Callback
//const blogPostsList = () => {
//  posts.map((post, i) => console.log(post.title));
//};
//
//const addBlogPost = (newPost, callback) => {
//  posts.push(newPost);
//  callback();
//};
//
//addBlogPost(
//  { title: "Tolgahan New Post Title", content: "new post content" },
//  blogPostsList
//);
