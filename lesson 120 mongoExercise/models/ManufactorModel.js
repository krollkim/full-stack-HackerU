const mongoose = require("mongoose");


const Schema = new mongoose.Schema({
    name: String,
    country: String,
    daysToCreate: Number,
    employeesNumber: {
        type: Number, 
        min: 4
    },
    yearOfFoundation: {
        type: Number,
        min: 1980
    },
    modifiedTo: String,
});

const Manufactor = mongoose.model("Manufactor", Schema);

module.exports = Manufactor;
