const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

// Define the schema for the Post model
const postSchema = new mongoose.Schema({
    photo: {
        type: String, 
        required: true
    },
    latitude: {
        type: Number, 
        required: true
        },
    longitude: {
        type: Number, 
        required: true
        },
    address: {
        type: String, 
        required: true
        },
    creator: {
        type: String, 
        required: true
    },
    created_at: {
        type: Date, 
    },
    size: {
        type: String, 
        required: true
    },
    people: {
        type: Number, 
        required: true
    },
    tools: [{
        type: Array, 
        required: true
    }],
    likes: [{
        type: ObjectId,
        ref: 'User' 
    }],
    userId: {
        type: ObjectId,
        ref: 'User', 
        required: true
    }
}, { timestamps: { createdAt: 'created_at' } });

// Export the Post model
module.exports = mongoose.model('Post', postSchema);