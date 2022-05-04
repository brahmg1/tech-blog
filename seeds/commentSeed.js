const { Comment } = require('../models');

const commentData = [
    {
        "comment_text": "This first post is awesome",
        "user_id": 2,
        "post_id": 1
    },
    {
        "comment_text": "I love it!",
        "user_id": 3,
        "post_id": 1
    },
    {
        "comment_text": "It is alright.",
        "user_id": 1,
        "post_id": 2
    },
    {
        "comment_text": "I like it so far!",
        "user_id": 4,
        "post_id": 3
    },
    {
        "comment_text": "I expected more from the post.",
        "user_id": 1,
        "post_id": 4
    },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;