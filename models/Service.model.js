const moment = require('moment');
const mongoose = require('mongoose');

const serviceSchema = mongoose.Schema({
    serviceName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    executorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Executor',
        required: true
    },
    serviceImg: {
        type: String
    },
    description: {
        type: String
    },
    time: {
        type: String,
        default: moment().format()
    },
        
    
    vipStatus: {
        type: Boolean,
        default: false
    }
})

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;