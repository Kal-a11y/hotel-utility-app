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
            const items = await Item.find().populate('locations');
            res.status(200).json(items);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }
};