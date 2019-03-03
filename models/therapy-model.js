const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const therapyySchema = new Schema(
    {
        
    },
    {
        timestamps: true
    }
);

const TherapyModel = mongoose.model('Therapy', therapySchema);

module.exports = TherapyModel;
