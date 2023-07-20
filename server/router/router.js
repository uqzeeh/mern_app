const router = require('express').Router();
const controller = require('../controller/controller');

router.post('/register', controller.register);
router.post('/login', controller.login);
// router.delete('/delete',controller.delete);

module.exports = router;