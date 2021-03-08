const productRoutes = require("./product");
const categoryRoutes = require('./category');
const subCategoryRoutes = require('./subCategory');
const customer = require('./customer');
const order = require('./order');

module.exports = (app) => {
    app.use('/api/categories', categoryRoutes);
    app.use('/api/products', productRoutes);
    app.use('/api/sub-categories', subCategoryRoutes);
    app.use('/api/users', customer);
    app.use('/api/orders',order )
}