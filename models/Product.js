const { Schema, model } = require('mongoose');

const ProductSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    url: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: [true, 'Category is Required']
    },
    subCategory: {
        type: Schema.Types.ObjectId,
        ref: "SubCategory",
        required: [true, 'SubCategory is Required']
    },
    brand: {
        type: String,
        trim: true
    },
    alt: String,
    stock: {
        type: Number,
        required: true,
    },
    previousPrice: Number,
    price: {
        type: Number,
        required: true
    },
    productKey: {
        type: String,
        trim: true,
        unique: true
    },
    quantity: {
        type: Number,
        default: 1
    },
    tags: [String],
    image1: {
        type: String,
        trim: true,
    },
    image2: {
        type: String,
        trim: true,
    },
    image3: {
        type: String,
        trim: true,
    },
    image4: {
        type: String,
        trim: true,
    },
    shortDescription: String,
    description: String,
    specification: [Object],
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
        }
    ],
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
}, {
    timestamps: true,
});

ProductSchema.index({ 'title':'text', 'description':'text' });


const Product = model('Product', ProductSchema);
module.exports = Product;