

const req = require('express/lib/request');
const res = require('express/lib/response');
const { User } = require('../models/User');

module.exports = {


    getUsers(req, res) {
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },

    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .select('-__v')
            .then((user) => !user ? res.status(404).json({ message: 'No user with that ID' })
                : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },

    createUser(req, res) {
        User.create(req.body)
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err));
    },

    deleteUser(req, res) {
        User.findOneAndDelete(req.body)
        .then((users) => !user ? res.status(404).json({ message: 'No user with that ID'})
        : User.deleteOne({ _id: { $in: user } })
        )
        .then(() => res.json({ message: 'User deleted!'}))
        .catch((err) => res.status(500).json(err));
    },

};