const { Schema, model } = require('mongoose');

const SubCategorySchema = new Schema({
    subCategory: {
        type: String,
        trim: true,
        required: true
    },
    subCategorySlug: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    subCategoryImage: {
        type: String,
        trim: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: [true, 'Category is Required']
    },
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: "Product",
        }
    ]
}, {
    timestamps: true
});

const SubCategory = model("SubCategory", SubCategorySchema);
module.exports = SubCategory;