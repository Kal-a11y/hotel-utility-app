const router = require('express').Router();
const stockRoutes = require('./stockRoutes');

router.use('/stock', stockRoutes);

module.exports = router;