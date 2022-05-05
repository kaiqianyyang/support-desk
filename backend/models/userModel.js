const mongoos = require('mongoose')

const userSchema= mongoos.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Please add a password'],
        unique: true,
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
    },
},
{
    timestamp: true,
})

module.exports = mongoos.model('User', userSchema)