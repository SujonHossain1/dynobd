const { Schema, model } = require('mongoose');

const CategorySchema = new Schema(
    {
        category: {
            type: String,
            trim: true,
            required: true,
        },
        categorySlug: {
            type: String,
            trim: true,
            unique: true,
            required: true,
        },
        categoryImage: {
            type: String,
            trim: true,
            required: true,
        },
        categoryIcon: {
            type: String,
            trim: true,
            required: true,
        },
        subCategories: [
            {
                type: Schema.Types.ObjectId,
                ref: 'SubCategory',
            },
        ],
        products: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Product',
            },
        ],
    },
    {
        timestamps: true,
    },
);

// CategorySchema.pre('deleteMany', function (next) {
//     var category = this;
//     category.model('SubCategory').deleteOne({ subCategories: this.getQuery()['_id'] }, next);
//     category.model('Product').deleteOne({ products: this.getQuery()['_id'] }, next);

// });

const Category = model('Category', CategorySchema);
module.exports = Category;
