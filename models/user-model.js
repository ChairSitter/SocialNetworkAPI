const mongoose = require('mongoose');
const { thoughtSchema } = require('./thought-model');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: [/.+@.+\..+/, 'Please fill a valid email address']
    },
    thoughts: [{type: mongoose.Schema.Types.ObjectId}],
    friends: [{type: mongoose.Schema.Types.ObjectId}]
},
    {
        toJSON: { virtuals: true }
    });

userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const User = mongoose.model('User', userSchema);

module.exports = User;