const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    numberOfParticipants: {
        type: Number,
        min: 1,
        max: 6,
        required: true,
    },
    minAge: {
        type: Number,
        min: 3,
        required: true,
    },
    cost: {
        type: Number,
        required: true,
    },
    monthsProductWarranty: {
        type: Number,
        min: 6,
        required: true,
    },
    manufactorId: {
        type: String,
        required: true,
    },
});

const Games = mongoose.model("Games", Schema);

module.exports = Games;
