const router = require('express').Router();
const { User, Posts } = require('../../models');

//the `/api/posts` endpoint

router.get('/', async (req, res) => {
    //find all posts
    try {
        const postData = await Posts.findAll({
            include: [{
                model: User
            }]
        })
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get(':/id', async (req, res) => {
    //find all posts by 1 user by userId
    try {
        const postData = await User.findByPk(req.params.id, {
            include: [{ model: Posts }]
        });
        if (!userData) {
            res.status(404).json({ message: 'No User found with this ID' });
            return;
        }
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;