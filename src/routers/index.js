const router = require('express').Router();
const ctrl = require('../controllers/homeController');

router.get('/', ctrl.output.home);
router.use('/kickboard', require('../routers/kickBoard'));

module.exports = router;