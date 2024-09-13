const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String, // Added 'type' before 'String'
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    }
});

// Create model
const User = mongoose.model('User', userSchema);

module.exports = User;
