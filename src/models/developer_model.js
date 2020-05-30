const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let developerSchema = new Schema({
    nombres_completos: {
        type: String,
        required: [true, 'Full name is required.']
    },
    link_github: {
        type: String,
        required: [true, 'Github link is required.']
    },
    tecnologias_conocidas: [{
        type: String,
        required: true
    }]
});

module.exports = mongoose.model('Developer', developerSchema);