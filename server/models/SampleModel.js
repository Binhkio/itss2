const { Schema, default: mongoose } = require("mongoose");

const SampleSchema = new Schema({
    name: String,
    email: String,
}, {
    timestamps: true,
});

const Sample = mongoose.model('Sample', SampleSchema);

module.exports = Sample;
