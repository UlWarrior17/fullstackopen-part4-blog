const lodash = require('lodash')

const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  return blogs.reduce((sum, blog) => sum + blog.likes, 0)
}

const favoriteBlog = (blogs) => {
  return blogs.length === 0
    ? {}
    : blogs.reduce((maxLikesBlog, blog) => blog.likes > maxLikesBlog.likes ? blog : maxLikesBlog, blogs[0])
}

const mostBlogs = (blogs) => {
  if (!blogs || blogs.length === 0) {
    return {};
  }

  const authors = lodash.groupBy(blogs, 'author')
  const authorWithMostBlogs = lodash.maxBy(lodash.keys(authors), (author) => authors[author].length)

  return {
    author: authorWithMostBlogs,
    blogs: authors[authorWithMostBlogs].length
  }
}

const mostLikes = (blogs) => {
  if (!blogs || blogs.length === 0) {
    return {}
  }

  const authors = lodash.groupBy(blogs, "author");

  const authorWithMostLikes = lodash.maxBy(lodash.keys(authors), (author) => {
    return lodash.sumBy(authors[author], "likes");
  });

  const totalLikes = lodash.sumBy(authors[authorWithMostLikes], "likes");

  return {
    author: authorWithMostLikes,
    likes: totalLikes,
  };
}
module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}