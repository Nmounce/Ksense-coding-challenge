const router = require('express').Router();
const { User, Posts } = require('../../models');

//the `/api/user` endpoint

router.get('/', async (req, res) => {
    //find all users
    try {
        const userData = await User.findAll();
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get(':/id', async (req, res) => {
    //find 1 user by its `id` value
    //include all associated posts
    try {
        const userData = await User.findByPk(req.params.id, {
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