const mongoose = require('mongoose');

const executorSchema = mongoose.Schema({
    login: {
        type: String,
        required: true,
        unique: true
    },
    executor: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    mail: {
        type: String
    },
    city: {
        type: String
    }
})

const Executor = mongoose.model('Executor', executorSchema);

module.exports = Executor;