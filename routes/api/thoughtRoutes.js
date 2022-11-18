

const router = require('express').Router();

const{
    getThought,
    getSingleThought,
    createThought,
    deleteThought,
} = require('../../controllers/thoughtController');

router.route('/').get(getThought).post(createThought);

router.route('/:id').get(getSingleThought).delete(deleteThought);

module.exports = router;