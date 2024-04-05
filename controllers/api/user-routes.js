//users GET ALL, GET ONE, POST, PUT, and DELETE
//friends POST and DELETE
const router = require('express').Router();
const { User } = require('../../models');

router.get('/', async(req, res) => {
    try {
        const response = await User.find({}).lean();
        res.status(200).json(response);
    } catch(err) {
        res.status(400).json(err);
    }
})

//not sure about this one
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
        const newUser = await Post.create(req.body);
        res.status(200).json(newUser);
    } catch(err) {
        res.status(400).json(err);
    }
})

//not sure about this one either
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