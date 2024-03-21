const { Item } = require('../models');

module.exports = {
    async addItem(req, res) {
       try {
        const item = await Item.create(req.body);
        res.status(200).json(item);
       } catch (error) {
        console.log(error);
        res.status(500).json(error);
       } 
    }
};