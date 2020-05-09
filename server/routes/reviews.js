const router = require('express').Router();
const ReviewCtrl = require('../controllers/review.controller');

router.post('/createReview/:id', ReviewCtrl.createReview);
router.post('/reviews', ReviewCtrl.assignToReview);
router.post('/reviews', ReviewCtrl.deleteReview);
router.get('/getReviews/:id', ReviewCtrl.getReview);
router.put('/reviews', ReviewCtrl.updateReview);

module.exports = router;