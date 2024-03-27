const router = require('express').Router();
const {
    addItem,
    getItems,
    addLocation,
    getLocations,
    stockCount,
    getSingleLocation
} = require('../../controllers/stockController');

router.route('/location/:locationId')
    .put(stockCount)
    .get(getSingleLocation);

// /api/stock/items
router.route('/items')
    .post(addItem)
    .get(getItems)

// /api/stock/locations
router.route('/locations')
    .post(addLocation)
    .get(getLocations)


module.exports = router;
