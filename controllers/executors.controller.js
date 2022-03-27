const Executor = require("../models/Executor.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { findById } = require("../models/Executor.model");

module.exports.executorsController = {
    signUp: async (req, res) => {
        const { login, executor, password, phone, city, mail } = req.body;
        const hash = await bcrypt.hash(password, Number(process.env.BCRYPT_ROUNDS));
        try {
            const newExecutor = await Executor.create({
                login,
                executor,
                password: hash,
                phone,
                city,
                mail
            });
            res.json(newExecutor);
        } catch (e) {
            res.json({ error: e.toString() });
        }
    },
    deleteExecutor: async (req, res) => {
        try {
            await Executor.findByIdAndDelete(req.params.id);
            res.json("Executor deleted");
        } catch (e) {
            res.json({ error: e.toString() });
        }
    },
    getExecutors: async (req, res) => {
        try {
            const executors = await Executor.find();
            res.json(executors);
        } catch (e) {
            res.json({ error: e.toString() });
        }
    },
    getExecutorById: async (req, res) => {
        try {
            const executorById = await Executor.findById(req.user.executorId);
            res.json(executorById);
        } catch (e) {
            res.json({ error: e.toString() });
        }
    },
    getExecutorByParamsId: async (req, res) => {
        try {
            const executorById = await Executor.findById(req.params.id);
            res.json(executorById);
        } catch (e) {
            res.json({ error: e.toString() });
        }
    },
    signIn: async (req, res) => {
        const { login, password } = req.body;
        try {

        const candidate = await Executor.findOne({ login });

        if (!candidate) {
            return res.status(401).json({ error: "Неверные логин или пароль (логин)" });
        }
        const valid = await bcrypt.compare(password, candidate.password);

        if (!valid) {
            return res.status(401).json({ error: "Неверные логин или пароль (пароль)" });
        }
        const payload = {
            executorId: candidate._id,
        };
            token = await jwt.sign(payload, process.env.SECRET_JWT_KEY, {
                expiresIn: "14d",
            });
            res.json({token});
        } catch (e) {
            res.json({ error: e.toString() });
        }
    },

    //Контроллеры для личного кабинета. Без необходимости не менять.
    editExecutor: async (req, res) => {
        const { executor, phone, city} = req.body
        const executorId = req.user.executorId
        try {
            await Executor.findByIdAndUpdate(executorId, {
                executor,
                phone,
                city
            })
            const updateUser = await Executor.findById(executorId)
            res.json(updateUser)
        } catch (e) {
            res.json({error: e.toString()})
        }
    }
};
