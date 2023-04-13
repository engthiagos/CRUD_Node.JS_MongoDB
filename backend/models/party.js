const mongoose = require('mongoose');
const { Schema } = mongoose;
const {serviceSchema} = require('./service')
const partySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true
    },
    description: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    services: {
        type: [serviceSchema],
        required: true
    },
},
// save creation date and update data
{timestamps: true}
);
const Party = mongoose.model('Party', partySchema);
module.exports = Party;