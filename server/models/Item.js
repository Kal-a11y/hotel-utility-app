const { Schema, model } = require('mongoose');

const itemSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        totalCount: Number,
        minCount: {
            type: Number,
            default: 1,
            required: true
        },
        countBy: {
            type: String,
            default: 'boxes'
        },
        locations: [{
            locationId: {
                type: Schema.Types.ObjectId,
                ref: 'location'
            },
            count: Number
        }],
    },
    { toJSON: { virtuals: true }, id: false }
);


const Item = model('item', itemSchema);

module.exports = Item;