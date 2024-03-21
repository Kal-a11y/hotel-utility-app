const { Schema, model } = require('mongoose');

const itemSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        totalCount: Number,
        minCount: Number,
        locations: [
            {
                type: Schema.Types.ObjectId,
                ref: 'location'
            }
        ]
    },
    { toJSON: { virtuals: true }, id: false }
);


const Item = model('item', itemSchema);

module.exports = Item;