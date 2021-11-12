// import models

const User = require('./User');
const Posts = require('./Posts');

// post belongs to user

Posts.belongsTo(User, {
    foreignKey: 'user_id'
});

//Users have many posts

User.hasMany(Posts, {
    foreignKey: 'user_id', onDelete: 'CASCADE',
});

module.exports = {
    User,
    Posts
};