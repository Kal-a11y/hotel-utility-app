const router = require('express').Router();
const {
    addItem,
    getItems,
    addLocation,
} = require('../../controllers/stockController');

// /api/stock/items
router.route('/items')
    .post(addItem)
    .get(getItems)

router.route('/locations')
    .post(addLocation)
    
module.exports = router;
