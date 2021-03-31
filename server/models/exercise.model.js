const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Exercise title is required'],
    },
    youtube: {
        type: String,
        required: [true, 'Youtube video id is required']
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Exercise', exerciseSchema);