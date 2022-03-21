const Service = require("../models/Service.model");
const Executor = require("../models/Executor.model");

module.exports.servicesController = {
    addService: async (req, res) => {
        const {serviceName, serviceImg, description, categoryId, price, rate, vipStatus} = req.body;
        const {executorId} = req.user
        try {
            const newService = await Service.create({
                serviceName, 
                serviceImg,
                description,
                categoryId, 
                price, 
                executorId,
                rate,
                vipStatus

            });
            res.json(newService);
        } catch (e) {
            res.json({error: e.toString()})
        }
    },
    deleteService: async (req, res) => {
        const token = req.headers
        try {
            const thisExecutor = await Executor.findOne({_id: req.user.executorId});
            const thisService = await Service.findOne({_id: req.params.id});
            if (thisExecutor._id.toString() !== thisService.executorId.toString()) {
                console.log(thisExecutor._id, thisService.executorId)
                return res.json({error: "Вы не имеете доступа к удалению этой услуги"})
            }

            await Service.findByIdAndDelete(req.params.id);
            res.json("service deleted")
        } catch (e) {
            res.json({error: e.toString()});
        }
    },
    getServices: async (req, res) => {
        try {
            const services = await Service.find();
            res.json(services);
        } catch (e) {
            res.json({error: e.toString()});
        }
    },
    getServiceById: async (req, res) => {
        try {
            const serviceById = await Service.findOne(req.params.id);
            res.json(serviceById);
        } catch (e) {
            res.json({error: e.toString()});
        }
    },
    getServicesByCategoryId: async (req, res) => {
        try {
            const servicesByCategoryId = await Service.findOne({categoryId: req.params.id});
            res.json(servicesByCategoryId);
        } catch (e) {
            res.json({error: e.toString()});
        }
    },
    getServicesByExecutorId: async (req, res) => {
        try {
            const servicesByExecutorId = await Service.findOne({executorId: req.params.id});
            res.json(servicesByExecutorId);
        } catch (e) {
            res.json({error: e.toString()});
        }
    }
}