const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
    productId: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        default: 1
    },
    userId: {
        type: String,
        required: true
    }
});

const CartItem = mongoose.model('CartItem', cartItemSchema);

module.exports = CartItem;