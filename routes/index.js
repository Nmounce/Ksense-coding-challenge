const router = require('express').Router();
const apiRoutes = require('./api');
const { User, Posts } = require('../models');
const axios = require('axios');
router.use('/api', apiRoutes);

router.get('/users', (req, res) => {
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(users => {
            // const userData = users.data.map(user => {
            //     console.log(user)
            //     return user.get({ plain: true })
            // })
            res.render('users',  users.data )
        })
});

router.use((req, res) => {
    res.send("<h1>Wrong Route!</h1>");
});

module.exports = router;