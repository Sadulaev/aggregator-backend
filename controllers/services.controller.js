const Service = require("../models/Service.model");
const Executor = require("../models/Executor.model");
const { findByIdAndRemove } = require("../models/Service.model");

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
            const thisService = await Service.findOne({_id: req.params.id});
            if (req.user.executorId !== thisService.executorId.toString()) {
                console.log(req.user.executorId, thisService.executorId)
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
            const serviceById = await Service.findById(req.params.id);
            res.json(serviceById);
        } catch (e) {
            res.json({error: e.toString()});
        }
    },
    getServicesByCategoryId: async (req, res) => {
        try {
            const servicesByCategoryId = await Service.find({categoryId: req.params.id});
            res.json(servicesByCategoryId);
        } catch (e) {
            res.json({error: e.toString()});
        }
    },
    getServicesByExecutorId: async (req, res) => {
        try {
            const servicesByExecutorId = await Service.find({executorId: req.user.executorId});
            res.json(servicesByExecutorId);
        } catch (e) {
            res.json({error: e.toString()});
        }
    },

    //Ниже контроллеры для личного кабинета. На 25.03.2022 3:22 рабочие. Без необходимости не менять.
    editServiceById: async (req, res) => {
        try {const {serviceName, description, price} = req.body
        await Service.findByIdAndUpdate(req.params.id, {
            serviceName,
            description,
            price
        })

        const newService = await Service.findById(req.params.id)
        res.json(newService)

        } catch (e) {
            res.json({error: e.toString()})
        }
    },
    removeServiceById: async (req, res) => {
        try {
            await Service.findByIdAndRemove(req.params.id)
            res.json({message:'Услуга успешно удалена'})
        } catch (e) {
            res.json({error: e.toString()})
        }
    }
}