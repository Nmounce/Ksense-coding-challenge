// import models

const User = require('./User');
const Posts = require('./Posts');

// post belongs to user

Posts.belongsTo(User, {
    foreignKey: 'id'
});

//Users have many posts

User.hasMany(Posts, {
    foreignKey: 'id', onDelete: 'CASCADE',
});

module.exports = {
    User,
    Posts
};