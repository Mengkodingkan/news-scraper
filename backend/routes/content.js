const router = require('express').Router();
const controller = require('../controllers/content');
const categoryCheck = require('../middleware/categoryCheck');

router.get('/news/:category/:option?/:option2?', categoryCheck, controller.news);

module.exports = router;