const { Schema, model } = require('mongoose');
 
const locationSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    stock: [
        {
            type: Schema.Types.ObjectId,
            ref: 'item'
        }
    ],
    lastCount: Date,
    nextCount: Date,
});

const Location = model('location', locationSchema);
module.exports = Location;