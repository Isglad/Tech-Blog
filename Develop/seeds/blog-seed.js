const { Blog } = require('../models');


const blogData = [
  {
    title: "The Tech-savvy Millennial",
    content: "The Tech-savvy Millennial",
    post_author_id: 1,
    createdAt: new Date(),
  },
  {
    title: "The Future of Code",
    content: "A blog that explores the advancements in coding, software development, and the impact it has on the future of technology and business.",
    post_author_id: 2,
    createdAt: new Date(),
  },
  {
    title: "Digital Creativity",
    content: "A blog that showcases the art and design of digital media, from website design to animation, and the role technology plays in shaping the future of digital creativity.",
    post_author_id: 3,
    createdAt: new Date(),
  }
];

const seedBlog = () => Blog.bulkCreate(blogData);

module.exports = seedBlog;
