const mongoose = require('mongoose');
const thoughtSchema = require('./thought-model.js');

const userSchema = new mongoose.Schema({
    username: {type: String,
         unique: true,
          required: true,
           trim: true},
    email: {type: String,
         unique: true,
          required: true,
           match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']},
    thoughts: [thoughtSchema],
    friends: [userSchema] //TODO ensure this works
});

userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
}); //TODO ensure this works

const User = mongoose.model('User', userSchema);

module.exports = User;