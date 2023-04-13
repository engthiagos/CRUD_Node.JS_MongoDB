const router = require('express').Router();
// Services router
const servicesRouter = require('./services');
// all routes from /... will come from services.js 
router.use('/', servicesRouter)
module.exports = router;