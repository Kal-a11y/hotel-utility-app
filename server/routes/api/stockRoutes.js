const router = require('express').Router();
const {
    addItem,
    getItems
} = require('../../controllers/stockController');

// /api/stock/items
router.route('/items')
    .post(addItem)
    .get(getItems)

module.exports = router;
