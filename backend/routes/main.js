const router = require('express').Router();
const controller = require('../controllers/main')

router.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'Welcome to the API'
    });
});

router.get('/home', controller.home);
router.get('/headline', controller.headline);


module.exports = router;