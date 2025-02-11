const mongoose = require('mongoose');

// Define the schema for the product in the order
const productSchema = new mongoose.Schema({
    productId: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

// Define the schema for the order
const orderSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    products: {
        type: [productSchema],
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },
    shippingAddress: {
        type: String,
        required: true
    },
    paymentStatus: {
        type: String,
        enum: ['Pending', 'Paid', 'Failed'],
        default: 'Pending'
    },
    orderStatus: {
        type: String,
        enum: ['Pending', 'Processing', 'Shipped', 'Delivered'],
        default: 'Pending'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Create the Order model
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;