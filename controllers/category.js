const { validationResult } = require('express-validator');
const Category = require('../models/Category');
const path = require('path');


exports.getCategories = async (req, res, next) => {
    try {
        const categories = await Category.find({}).populate("subCategories");
        if (!categories) {
            return status(400).send({
                message: 'Don\'t have any category in database'
            })
        }
        res.status(200).send(categories);
    } catch (err) {
        res.status(500).send(err);
    }
}

exports.findCategoryWithUrl = async (req, res, next) => {
    try {
        const category = await Category.findOne({ categorySlug: req.params.url })
            .populate('products')
            .select('-subCategories');

        res.status(200).send(category);
    } catch (err) {
        res.status(500).send(err);
    }
}

exports.getCategoriesWithProduct = async (req, res, next) => {
    try {
        const categories = await Category.find({}).populate('products');
        return res.status(200).send(categories);
    } catch (err) {
        res.send(err);
    }
}

exports.createCategory = async (req, res, next) => {

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send({ message: 'At least One Image uploaded.' });
    }

    let image = req.files && req.files.image;
    const allowExtensions = /png|jpg|jpeg|gif|png/
    const extension = path.extname(image.name);

    try {
        const errors = validationResult(req).formatWith((err) => err.msg);
        if (!errors.isEmpty()) {
            return res.status(400).send(errors.mapped());
        }


        if (!allowExtensions.test(extension))
            return res.status(400).send({ error: 'Invalid extension' })

        if (image) {
            image.mv(`${__dirname}/uploads/${image && image.name}`, err => {
                if (err) {
                    return res.status(500).send({ message: 'Image 1 could not be uploaded' })
                }
            });
        }
        const category = await Category.create({
            ...req.body,
            categoryImage: image.name
        });

        return res.status(201).send({
            message: 'Category created successfully.',
            data: category
        })


    } catch (err) {
        res.send(err);
    }
};


exports.updateCategory = async (req, res, next) => {

    let image = req.files && req.files.image;
    try {
        if (image) {
            image.mv(`${__dirname}/uploads/${image && image.name}`, err => {
                if (err) {
                    return res.status(500).send({ message: 'Image  could not be uploaded' })
                }
            });
        }

        const { category, categoryIcon, categorySlug, categoryImage } = req.body;


        const foundCategory = await Category.findOneAndUpdate({ _id: req.params.categoryId },
            {
                $set: {
                    category,
                    categoryIcon,
                    categorySlug,
                    categoryImage: image && image.name || categoryImage
                }
            }, {
            new: true
        });

        if (!foundCategory) {
            return res.status(400).send({ message: 'Category not found' })
        }
        res.status(200).send({
            message: 'Category updated successfully.',
            data: foundCategory
        })
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.deleteCategory = async (req, res, next) => {
    try {
        const category = await Category.findOneAndDelete({ _id: req.params.categoryId });
        res.status(200).send({
            message: 'Category deleted successfully.',
            data: category
        });

    } catch (err) {
        res.status(400).send(err);
    }
}