const { Schema, model } = require('mongoose');
 
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

const Location = model('location', locationSchema);
module.exports = Location;