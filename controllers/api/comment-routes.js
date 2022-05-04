const router = require('express').Router();
const { Comment } = require('../../models');

// GET all comments /api/comments
router.get('/', (req, res) => {
    Comment.findAll().then(data => res.json(data))
    .catch(err => {
        console.error(err)
        res.status(500).json(err)
    })
});

// POST a new comment /api/comments
router.post('/', (req, res) => {
    // wrap this in an if to check the session and replace used id with req.session.user_id
    if(req.session) {
        Comment.create({
            // Check the session
            comment_text: req.body.comment_text,
            post_id: req.body.post_id,
            user_id: req.session.user_id
        })
        .then(data => res.json(data))
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
    }
});

// DELETE a comment
router.delete('/:id', (req, res) => {
    Comment.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(data => {
        if(!data) {
            res.status(404).json({ message: 'No comment found with this id' })
            return;
        }
        res.json(data)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
});

module.exports = router;