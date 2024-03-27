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
            const items = await Item.aggregate([
                {
                    $lookup: {
                        from: 'locations',
                        localField: 'locations.locationId',
                        foreignField: 'id',
                        as: 'locationData'
                    }
                },
                {
                    $addFields: {
                        "locations": {
                            $map: {
                              input: { $range: [0, { $size: "$locationData" }] },
                              as: "index",
                              in: {
                                name: { $arrayElemAt: ["$locationData.name", "$$index"] },
                                count: { $arrayElemAt: ["$locations.count", "$$index"] }
                              }
                            }
                          }
                    }
                },
                {
                    $project: {
                        locationData: 0,
                        __v: 0
                    }
                }
            ]);
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
    async getSingleLocation(req, res) {
        try {
            const { locationId } = req.params;
            const location = await Location.findById(locationId);
            res.status(200).json(location);
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
                    return
                }

                const locationIndex = item.locations.findIndex(location => location._id.toString() === locationId);


                if (locationIndex !== -1) {
                    item.locations[locationIndex].count = count;
                } else {
                    item.locations.push({ _id: locationId, count: count });
                }

                await item.save();

                stockItems.push({ item: itemId, count });
            }

            const updatedLocation = await Location.findOneAndUpdate({ _id: locationId }, { $set: { stock: stockItems, lastCount: new Date() } }, { new: true }).populate({ path: 'stock.item', select: '-locations -minCount -__v -totalCount' }).exec();
            await updatedLocation.updateTotalCount();

            res.status(200).json(updatedLocation);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }
};