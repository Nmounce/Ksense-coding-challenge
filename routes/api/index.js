const router = require("express").Router();
const userRoute = require("./user-route");
const postsRoute = require("./posts-route");

router.use('/user', userRoute);
router.use('/posts', postsRoute);

module.exports = router;

// When the user selects a 'USER' in the table, it will display all of the 'POSTS' that were created by that 'USER'.