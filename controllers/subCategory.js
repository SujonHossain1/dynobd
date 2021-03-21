const { validationResult } = require('express-validator');
const Category = require('../models/Category');
const SubCategory = require('../models/SubCategory');
const path = require('path');

exports.getAllSubCategories = async (req, res, next) => {
    try {
        const subCategories = await SubCategory.find({});
        res.status(200).send(subCategories);
    } catch (err) {
        console.log(err);
    }
}

exports.getSubCategoryProductsWithSlug = async (req, res, next) => {
    try {
        const subCategory = await SubCategory.findOne({ subCategorySlug: req.params.slug })
            .populate('products');
        res.status(200).send(subCategory);

    } catch (err) {
        console.log(err);
    }
}

exports.getSubCategories = async (req, res, next) => {
    try {
        const subCategories = await Category.findOne({ _id: req.params.categoryId }).populate("subCategories");
        res.send(subCategories);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.createSubCategory = async (req, res, next) => {
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
            image.mv(`../uploads/${image && image.name}`, err => {
                if (err) {
                    return res.status(500).send({ message: 'Image 1 could not be uploaded' })
                }
            });
        }
        const category = await Category.findOne({ _id: req.params.categoryId });
        const subCategory = await SubCategory.create({
            ...req.body,
            subCategoryImage: image && image.name,
            category: category._id
        });

        category.subCategories.push(subCategory._id);
        await category.save();

        return res.status(201).send({
            message: 'SubCategory created successfully.',
            data: subCategory
        })

    } catch (err) {
        res.status(500).send({ msg: err.message })
    }
}

exports.deleteSubCategory = async (req, res, next) => {
    try {
        const subCategory = await SubCategory.findOneAndDelete({ _id: req.params.id });
        res.status(200).send({
            message: 'Sub Category deleted successfully.',
            data: subCategory
        });

    } catch (err) {
        res.status(400).send(err);
    }
}