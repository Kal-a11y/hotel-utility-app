const router = require('express').Router();
const {
    addItem,
    getItems,
    addLocation,
    getLocations,
    stockCount
} = require('../../controllers/stockController');

router.route('/:locationId')
    .put(stockCount);

// /api/stock/items
router.route('/items')
    .post(addItem)
    .get(getItems)

// /api/stock/locations
router.route('/locations')
    .post(addLocation)
    .get(getLocations)


module.exports = router;
