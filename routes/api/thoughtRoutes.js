

const router = require('express').Router();

const{
    getThought,
    getSingleThought,
    createThought,
    deleteThought,
    createReaction,
    deleteReaction,
} = require('../../controllers/thoughtController');

router.route('/').get(getThought).post(createThought);

router.route('/:id').get(getSingleThought).delete(deleteThought);

router.route('/:thoughtId/reaction').post(createReaction);

router.route('/:thoughtId/reaction/:reactionId').delete(deleteReaction)

module.exports = router;