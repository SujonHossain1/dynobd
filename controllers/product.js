const { validationResult } = require('express-validator')
const Category = require('../models/Category');
const Product = require('../models/Product');
const SubCategory = require('../models/SubCategory');
const path = require('path');


exports.productSearch = async (req, res, next) => {

    try {
        console.log(req.params.query)
        const find = { '$text': { '$search': req.params.query } };

        const products = await Product.find(find)
            .populate('category', 'category categorySlug')
            .populate('subCategory', 'subCategory subCategorySlug')

        res.status(200).json(Array.isArray(products) ? products : []);

    } catch (err) {
        console.log(err)
    }

}


exports.createProduct = async (req, res, next) => {

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send({ message: 'At least One Image uploaded.' });
    }

    const allowExtensions = /png|jpg|jpeg|gif|png/;

    let image1 = req.files && req.files.image1;
    let image2 = req.files && req.files.image2;
    let image3 = req.files && req.files.image3;
    let image4 = req.files && req.files.image4;

    try {




        const errors = validationResult(req).formatWith((err) => err.msg);
        if (!errors.isEmpty()) {
            return res.status(400).send(errors.mapped());
        }


        for (const file of Object.keys(req.files)) {
            const image = req.files[file];
            if (!allowExtensions.test(path.extname(image.name))) {
                return res.status(400).send({ error: 'Invalid extension' })
            }
        }


        if (image1) {
            image1.mv(`${__dirname}/uploads/${image1 && image1.name}`, err => {
                if (err) {
                    return res.status(500).send({ message: 'Image 1 could not be uploaded' })
                }
            });
        }

        if (image2) {
            image2.mv(`${__dirname}/uploads/${image2 && image2.name}`, err => {
                if (err) {
                    return res.status(500).send({ message: 'Image 2 could not be uploaded' })
                }
            });
        }
        if (image3) {
            image3.mv(`${__dirname}/uploads/${image3 && image3.name}`, err => {
                if (err) {
                    return res.status(500).send({ message: 'Image 2 could not be uploaded' })
                }
            });
        }
        if (image4) {
            image4.mv(`${__dirname}/uploads/${image4 && image4.name}`, err => {
                if (err) {
                    return res.status(500).send({ message: 'Image 2 could not be uploaded' })
                }
            });
        }

        const category = await Category.findOne({ _id: req.params.categoryId });
        const subCategory = await SubCategory.findOne({ _id: req.params.subCategoryId });

        const { title, shortDescription, description, price, previousPrice, stock, productKey, alt, url, specification } = req.body;
        const spec = JSON.parse(specification);
        const product = await Product.create({
            category: category._id,
            subCategory: subCategory._id,
            title,
            url,
            shortDescription,
            description,
            previousPrice,
            stock,
            price,
            productKey,
            specification: spec,
            alt,
            image1: image1 && image1.name,
            image2: image2 && image2.name,
            image3: image3 && image3.name,
            image4: image4 && image4.name,
        })

        category.products.push(product);
        subCategory.products.push(product);

        await category.save();
        await subCategory.save();

        return res.send({
            message: 'Product Added Successfully New',
            data: product,
        });


    } catch (err) {
        res.status(500).send({ msg: err.message })
    }

}

exports.getProducts = async (req, res, next) => {
    try {
        const products = await Product.find({});
        res.status(200).send(products);
    } catch (err) {
        res.status(500).send({ msg: err.message })
    }
};

exports.getProductByUlr = async (req, res, next) => {
    try {

        const product = await Product.findOne({ url: req.params.url })
            .populate("category", "category categorySlug")
            .populate('subCategory', 'subCategory subCategorySlug')


        res.status(200).send(product);
    } catch (err) {
        res.status(500).send({ msg: err.message })
    }
}

exports.updateProduct = async (req, res, next) => {
    const allowExtensions = /png|jpg|jpeg|gif|png/;

    let image1 = req.files && req.files.image1;
    let image2 = req.files && req.files.image2;
    let image3 = req.files && req.files.image3;
    let image4 = req.files && req.files.image4;


    const errors = validationResult(req).formatWith((err) => err.msg);
    if (!errors.isEmpty()) {
        return res.status(400).send(errors.mapped());
    }


    if (image1 || image2 || image3 || image4) {
        for (const file of Object.keys(req.files)) {
            const image = req.files[file];
            if (!allowExtensions.test(path.extname(image.name))) {
                return res.status(400).send({ error: 'Invalid extension' })
            }
        }
    }


    if (image1) {
        image1.mv(`${__dirname}/uploads/${image1 && image1.name}`, err => {
            if (err) {
                return res.status(500).send({ message: 'Image 1 could not be uploaded' })
            }
        });
    }

    if (image2) {
        image2.mv(`${__dirname}/uploads/${image2 && image2.name}`, err => {
            if (err) {
                return res.status(500).send({ message: 'Image 2 could not be uploaded' })
            }
        });
    }
    if (image3) {
        image3.mv(`${__dirname}/uploads/${image3 && image3.name}`, err => {
            if (err) {
                return res.status(500).send({ message: 'Image 2 could not be uploaded' })
            }
        });
    }
    if (image4) {
        image4.mv(`${__dirname}/uploads/${image4 && image4.name}`, err => {
            if (err) {
                return res.status(500).send({ message: 'Image 2 could not be uploaded' })
            }
        });
    }
    const category = await Category.findOne({ _id: req.params.categoryId });
    const subCategory = await SubCategory.findOne({ _id: req.params.subCategoryId });

    const { _id, title, shortDescription, description, price, previousPrice, stock, productKey, alt, url, specification } = req.body;
    const spec = JSON.parse(specification);

    const findProduct = await Product.findOne({ _id });

    const product = await Product.findOneAndUpdate({ _id },
        {
            $set: {
                category: category._id,
                subCategory: subCategory._id,
                title,
                url,
                shortDescription,
                description,
                previousPrice,
                stock,
                price,
                productKey,
                specification: spec,
                alt,
                image1: image1 && image1.name || findProduct.image1,
                image2: image2 && image2.name || findProduct.image2,
                image3: image3 && image3.name || findProduct.image3,
                image4: image4 && image4.name || findProduct.image4,
            }
        }
    )


    await category.save();
    await subCategory.save();

    console.log(req.body);
    console.log(req.files);

    return res.send({
        message: 'Product Update Successfully New',
        data: product,
    });
}


exports.deleteProductById = async (req, res, next) => {
    try {
        const deleteProduct = await Product.findOneAndDelete({ _id: req.params.productId });
        res.status(200).send({
            message: 'Product Deleted Successfully',
            data: deleteProduct,
        });
    } catch (err) {
        res.status(500).send({ error: err.message })
    }
};