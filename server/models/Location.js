const { Schema, model } = require('mongoose');
const Item = require('./Item');
 
const locationSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    stock: [{
        item: {
            type: Schema.Types.ObjectId,
            ref: 'item'
        },
        count: Number
    }],
    lastCount: Date,
    nextCount: Date,
});

locationSchema.methods.updateTotalCount = async function () {
    try {
        const totalStock = await Location.aggregate([ 
            {
                $unwind: "$stock"
            },
            {
                $group: {
                    _id: "$stock.item",
                    totalCount: { $sum: "$stock.count" }
                }
            },
            {
                $lookup: {
                    from: "items",
                    localField: "_id",
                    foreignField: "_id",
                    as: "item"
                }
            },
            {
                $project: {
                    _id: 0,
                    itemId: "$item._id",
                    totalCount: 1
                }
            }
        ]);
       

        for (const item of totalStock) {
            const { itemId, totalCount } = item;
            const updatedItem = await Item.findByIdAndUpdate(itemId, { totalCount }, { new: true });
            // console.log(updatedItem);
        }
        return totalStock;
    } catch (error) {
        console.error(error);
    }

}


const Location = model('location', locationSchema);

module.exports = Location;