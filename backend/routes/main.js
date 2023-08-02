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

// news static route more than 1
// router.get('/news/:category-:option', controller.news);


module.exports = router;