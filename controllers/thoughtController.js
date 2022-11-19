


const { Thought } = require('../models');

module.exports = {


    getThought(req, res) {
        Thought.find()
            .then((thought) => res.json(thought))
            .catch((err) => res.status(500).json(err));
    },

    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.Id })
            .select('-__v')
            .then((thought) => !thought ? res.status(404).json({ message: 'No thought with that ID ' })
                : res.json(user)
            )
            .catch((err) => res.status(500).json(err.message));
    },

    createThought(req, res) {
        Thought.create(req.body)
            .then((thought) => res.json(thought))
            .catch((err) => res.status(500).json(err));
    },

    updateThought(req, res) {
        Thought.findOneAndUpdate(req.body)
        .then((thought) => !thought ? res.status(404).json({ message: "No thought with that ID"})
            : res.json(thought)
            )
            .catch((err) => res.status(500).json(err.message));
    },

    deleteThought(req, res) {
        Thought.findOneAndDelete(req.body)
            .then((thought) => !thought ? res.status(404).json({ message: 'No thought with that ID' })
                : Thought.deleteOne({ _id: { $in: thought } })
            )
            .then(() => res.json({ message: 'Thought deleted' }))
            .catch((err) => res.status(500).json(err));
    },

    createReaction(req, res) {
        Thought.findByIdAndUpdate(req.params.thoughtId, { $addToSet: { reaction: req.body } }, { runValidators: true, new: true })
            .then(() => res.json({ message: 'Reaction created' }))
            .catch((err) => res.status(500).json(err));
    },

    deleteReaction(req, res) {
        Thought.findByIdAndUpdate(req.params.thoughtId, { $pull: { reaction: { reactionId: req.params.reactionId } }}, { runValidators: true, new: true })
        .then(() => res.json({ message: 'Reaction deleted' }))
        .catch((err) => res.status(500).json(err));
    }

};