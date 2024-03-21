const router = require('express').Router();
const {
    addItem,
    getItems,
    addLocation,
    getLocations
} = require('../../controllers/stockController');

// /api/stock/items
router.route('/items')
    .post(addItem)
    .get(getItems)

// /api/stock/locations
router.route('/locations')
    .post(addLocation)
    .get(getLocations)


module.exports = router;
