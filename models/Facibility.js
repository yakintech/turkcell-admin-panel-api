const mongoose = require('mongoose');

// name: name,
// description: description,
// address: address,
// city: city

const FacibilitySchema = new mongoose.Schema({
    name: String,
    description: String,
    address: String,
    city: String
},
{timestamps: true});


module.exports = mongoose.model('Facibility', FacibilitySchema);