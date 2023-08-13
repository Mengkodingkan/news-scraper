const router = require('express').Router();
const controller = require('../controllers/main')

router.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'Welcome to the API'
    });
});

router.get('/home', controller.home);
router.get('/categories', controller.categories);
router.get('/category/:category/:option?', controller.category);

module.exports = router;