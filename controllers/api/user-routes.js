//users GET ALL, GET ONE, POST, PUT, and DELETE
//friends POST and DELETE
const router = require('express').Router();
const { User } = require('../../models');
const { ObjectId } = require('mongodb');

router.get('/', async(req, res) => {
    try {
        const response = await User.find({}).lean();
        res.status(200).json(response);
    } catch(err) {
        res.status(400).json(err);
    }
})

router.get('/:id', async(req, res) => {
    try {
        const response = await User.findOne({_id: req.params.id});
        res.status(200).json(response);
    } catch(err){
        res.status(400).json(err);
    }
})

router.post('/', async(req, res) => {
    try {
        const newUser = await User.create({
            username: req.body.username,
            email: req.body.email, 
        });
        res.send(newUser);
    } catch(err) {
        res.status(400).json(err);
    }
})

router.put('/:id', async (req, res) => {
    try {
        const updateUser = await User.updateOne({
            _id: new ObjectId(req.params.id)
        }, req.body)
        res.status(200).json(updateUser);
    } catch(err){
        res.status(400).json(err)
    }
})

router.delete('/:id', async(req, res) => {
    try {
        const deleteUser = await User.deleteOne({
            _id: new ObjectId(req.params.id)
        })
        res.status(200).json(deleteUser);
    } catch(err) {
        res.status(400).json(err);
    }  
})

//post and delete routes for friends of a user

router.post('/:userId/friends/:friendId', async(req, res) => {
    try {
        const newFriend = await User.findOneAndUpdate(
            {_id: req.params.userId},
            {$push: {friends: req.params.friendId}},
            {new: true}
        )
        res.status(200).json(newFriend);
    } catch(err) {
        res.status(400).json(err);
    }
})

router.delete('/:userId/friends/:friendId', async(req, res) => {
    try {
        const deleteReaction = await User.findOneAndUpdate(
            {_id: req.params.userId},
            {$pull: {reactions: req.params.friendId}},
            {new: true}
        )
    } catch(err) {
        res.status(400).json(err);
    }
})

module.exports = router;