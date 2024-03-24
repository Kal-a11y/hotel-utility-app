const { Item, Location } = require('../models');

module.exports = {
    async addItem(req, res) {
        try {
            const item = await Item.create(req.body);
            res.status(200).json(item);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },
    async addLocation(req, res) {
        try {
            const location = await Location.create(req.body);
            res.status(200).json(location);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },
    async getItems(req, res) {
        try {
            const items = await Item.find().select('-locations');
            res.status(200).json(items);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },
    async getLocations(req, res) {
        try {
            const locations = await Location.find().populate('stock');
            res.status(200).json(locations);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },
    async stockCount(req, res) {
        try {
            const { locationId } = req.params;
            const { stock } = req.body;

            const stockItems = [];

            for (const stockItem of stock) {
                const { itemId, count } = stockItem;

                let item = await Item.findById(itemId);
                
                if (!item) {
                    res.status(404).json({ message: `Item with ID ${itemId} not found` });
                }

                await Item.findByIdAndUpdate(itemId, {$set: {locations: {_id: locationId, count}}}, {new: true}); 

                stockItems.push({item: itemId, count});
            }
            
            const updatedLocation = await Location.findByIdAndUpdate(locationId, {$set: {stock: stockItems, lastCount: new Date()}}, {new: true}).populate({path: 'stock.item', select: '-locations -minCount -__v'});
            console.log(updatedLocation);
            res.status(200).json(updatedLocation);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }
};