const router = require('express').Router();
const controller = require('../controllers/main')
const categoryCheck = require('../middleware/categoryCheck');

router.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'Welcome to the API'
    });
});

router.get('/home', controller.home);
router.get('/categories', controller.categories);
router.get('/category/:category/:option?', categoryCheck, controller.category);

module.exports = router;