const UsersModels = require('../models/users.js');

const getAllUsers = async (req, res) => {
    try {
        const [rows] = await UsersModels.getAllUsers();
        res.json({
            message: 'GET all users berhasil'
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const createNewUser = async (req, res) => {
    const { body } = req;
    try {
        await UsersModels.createNewUser(body);
        res.json({
            message: 'CREATE new user berhasil',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const updateUser = async (req, res) => {
    const {idUser} = req.params;
    const { body } = req;
    try {
        await UsersModels.updateUser(body, idUser);    
        res.json({
            message: 'UPDATE user berhasil',
            data: {
                id: idUser,
                ...body
            },
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const deleteUser = async (req, res) => {
    const { idUser } = req.params;
    try {
        await UsersModels.deleteUser(idUser);
        res.json({
            message: 'Delete user berhasil',
            data: null
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            serverMessage: error,
        })
    }
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser,
}