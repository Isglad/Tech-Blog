const { Comment } = require('../models');


const commentData = [
    {
        content: 'This is a great blog post!',
        comment_author_id: 3,
        blog_id: 3,
      },
      {
        content: 'I completely disagree with your opinions.',
        comment_author_id: 1,
        blog_id: 1,
      },
      {
        content: 'I found this blog post to be very helpful.',
        comment_author_id: 2,
        blog_id: 2,
      },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;
