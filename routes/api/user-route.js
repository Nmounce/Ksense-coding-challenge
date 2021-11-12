const router = require('express').Router();
const { User, Posts } = require('../../models');

//the `/api/posts` endpoint

router.get('/', async (req, res) => {
    //find all users
    //include all associated  posts
    try {
        const userData = await User.findAll();
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});