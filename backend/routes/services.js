const router = require('express').Router();
const serviceController = require('../controlers/serviceController');
router
    .route('/services')
    .post((req, res) => serviceController.Create(req,res));
// router
//     .route('/services')
//     .get((req, res) => serviceController.ReadAll(req, res));
router
    .route('/services/:id')
    .get((req, res) => serviceController.Read(req, res));
router
    .route('/services/:id')
    .delete((req, res) => serviceController.Delete(req, res));
router
    .route('/services/:id')
    .put((req, res) => serviceController.Update(req, res));
module.exports = router;