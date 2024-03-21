const router = require('express').Router();
const {
    addItem
} = require('../../controllers/stockController');

// /api/stock/items
router.route('/items')
    .post(addItem);

module.exports = router;
