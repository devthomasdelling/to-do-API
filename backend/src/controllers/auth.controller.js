const bcrypt = require("bcrypt")
const User = require("../models/user.model");
const Task = require("../models/task.model");


const register = async (req, res, next) => {

    try {
        const { name, email, password } = req.body

        if (!name || !email || !password) {
            const error = new error("todos os campos são obrigatorios");
            error.statusCode = 400;
            throw error;
        }

        const userExists = await User.findOne({ email })
        if (userExists) {
            const error = new Error("Email ja cadastrado")
            error.statusCode = 400;
            throw error;
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        res.status(201).json({
            id: user._id,
            name: user.name,
            email: user.email,
        });
    } catch (error) {
        next(error)
    }
}

const login = async (req, res, next) => {

    try {
        const { email, password } = req.body

        if (!email || !password) {
            const error = new Error("todos os campos são obrigatorios")
            error.statusCode = 400;
            throw error;
        }
        const user = await User.findOne({ email })

        if (!user) {
            const error = new Error("Email ou senha invalidos")
            error.statusCode = 401;
            throw error;
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            const error = new Error("Email ou senha invalidos")
            error.statusCode = 401;
            throw error;
        }

        res.status(200).json({
            message: "Login realizado com sucesso",
            user: {
                id: user._id,
                name: user_name,
                email: user.email,
            }
        });

    } catch (error) {
        next(error);
    }
};

module.exports = {
    register,
    login
}