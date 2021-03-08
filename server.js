const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const cookieParser = require('cookie-parser')
require('dotenv').config();


// App Config 
const app = express();


// middleware 
const middleware = [
    morgan('dev'),
    cors(),
    express.urlencoded({ limit: '15mb', extended: true }),
    express.json({ limit: '15mb' }),
    fileUpload(),
    cookieParser()
];
app.use(middleware);
app.use(express.static(`${__dirname}/controllers/uploads`));

// Imports Routes
require('./routes/routes')(app);
require('./mailSend');

app.get('/', (req, res) => {
    res.send({ message: 'Welcome to your Auth' });
});

app.use('*', (req, res, next) => {
    res.status(404).send({
        message: ' 404 Not Found'
    })
})

app.use((err, req, res, next) => {
    if (res.headersSent) {
        next('There is Error')
    } else {
        if (err.message) {
            res.status(500).send({ success: false, message: err.message, })
        } else {
            res.status(500).send({ success: false, message: 'There was an error' });
        }
    }
});


// Server Configuration && Database Connection 
const PORT = process.env.PORT || 4000;
const server = app.listen(PORT, () => {
    const port = server.address().port;
    console.log(`SERVER IS RUNNING ON PORT ${port} AND SERVER ON MODE ${process.env.NODE_ENV}`);

    if (process.env.NODE_ENV === 'production') {
        mongoose.connect(`mongodb+srv://dynobd:${process.env.DB_PASSWORD}@dynobd.c1aoz.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true });
        const db = mongoose.connection;
        db.on('connected', () => {
            console.log(`Connected to MongoDB Live ${db.name} Database`);
        })
    } else {
        mongoose.connect('mongodb://localhost:27017/DynoBD', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
        const db = mongoose.connection;
        db.on('connected', () => {
            console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
        })
    }
})


