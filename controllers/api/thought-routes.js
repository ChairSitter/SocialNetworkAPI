//thoughts GET ALL, GET ONE, POST, PUT, DELETE
const router = require('express').Router();
const { Thought, User } = require('../../models');
const { ObjectId } = require('mongodb');

router.get('/', async(req, res) => {
    try {
        const response = await Thought.find({}).lean();
        res.status(200).json(response);
    } catch(err) {
        res.status(400).json(err);
    }
})

router.get('/:id', async(req, res) => {
    try {
        const response = await Thought.findOne({_id: req.params.id});
        res.status(200).json(response);
    } catch(err){
        res.status(400).json(err);
    }
})

router.post('/', async (req, res) => {
    try {
        const newThought = await Thought.create(req.body);
        const updateUser = await User.findOneAndUpdate(
            {username: req.body.username},
            { $push: {thoughts: req.body}},
            {new: true}
        )
        res.status(200).json(newThought);
        res.status(200).json(updateUser);
    } catch(err) {
        res.status(400).json(err);
    }
})

router.put('/:id', async (req, res) => {
    try {
        const updateThought = await Thought.updateOne({
            _id: new ObjectId(req.params.id)
        }, req.body)
        res.status(200).json(updateThought);
    } catch(err){
        res.status(400).json(err)
    }
})

router.delete('/:id', async(req, res) => {
    try {
        const deleteThought = await Thought.deleteOne({
            _id: new ObjectId(req.params.id)
        })
        res.status(200).json(deleteThought);
    } catch(err) {
        res.status(400).json(err);
    }  
})

//post and delete reactions

router.post('/:thoughtId/reactions', async(req, res) => {
    try {
        const newReaction = await Thought.findOneAndUpdate(
            {_id: req.params.thoughtId},
            {$push: {reactions: req.params.reactions}},
            {new: true}
        )
        res.status(200).json(newReaction);
    } catch(err) {
        res.status(400).json(err);
    }
})

router.delete('/:thoughtId/reactions/:reactionId', async(req, res) => {
    try {
        const deleteReaction = await Thought.findOneAndUpdate(
            {_id: req.params.thoughtId},
            {$pull: {reactions: req.params.reactionId}},
            {new: true}
        )
    } catch(err) {
        res.status(400).json(err);
    }
})

module.exports = router;