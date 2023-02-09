const { User } = require('../models');


const userData = [
    {
        username: 'Sarah Johnson',
        password: 'password123',
    }, 
    {
        username: 'David Kim',
        password: 'password456',
    },
    {
        username: 'Emily Brown',
        password: 'password789',
    }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
