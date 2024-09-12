const mongoose = require('mongoose');

const adharSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dob: {
        type: Number,
        required: true
    },
    adharno: {
        type: Number,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true
    },
    profession: {
        type: String,
        enum: ['student', 'Job', 'unemployed']
    }
});

const Adhar = mongoose.models.Adhar || mongoose.model('Adhar', adharSchema);

module.exports = Adhar;
