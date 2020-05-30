require('./config/config')

const express = require('express');
const mongoose = require('mongoose');
const colors = require('colors/safe');
const bodyParser = require('body-parser')

const developer = require('./routes/developer')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(developer);

mongoose.connect(process.env.URLDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}, (err, res) => {
    if (err) {
        throw err;
    } else {
        console.log(colors.green('******************************'));
        console.log(colors.bold.green('Database status: ONLINE'));
        console.log(colors.green('******************************'));
    }
});

app.listen(process.env.PORT, () => {
    console.log(colors.green('******************************'));
    console.log(colors.bold.green(`Server listening on port: ${process.env.PORT}`));
    console.log(colors.green('******************************'));
});