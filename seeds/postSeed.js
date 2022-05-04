const { Post } = require('../models');

const postData = [
    {
        "title": "This is the first post created, thoughts?",
        "post_text": "This is some post text",
        "user_id": 1
    },
    {
        "title": "This is the second post created, what do you think?.",
        "post_text": "This is some post text",
        "user_id": 2
    },
    {
        "title": "This is the third post created, it is pretty cool",
        "post_text": "This is some post text",
        "user_id": 3
    },
    {
        "title": "This is the fourth post created.",
        "post_text": "This is some post text",
        "user_id": 4
    },
    {
        "title": "This is the fifth post created",
        "post_text": "This is some post text",
        "user_id": 1
    },
    {
        "title": "This is the sixth post created",
        "post_text": "This is some post text",
        "user_id": 2
    },
    {
        "title": "This is the seventh post created",
        "post_text": "This is some post text",
        "user_id": 4
    },
    {
        "title": "This is the eighth post created",
        "post_text": "This is some post text",
        "user_id": 1
    },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;