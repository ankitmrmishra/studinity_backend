"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.deleteusers = exports.getalluser = void 0;
const users_1 = require("../db/users");
const getalluser = async (req, res) => {
    try {
        const users = await (0, users_1.getUsers)();
        return res.json(users);
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
exports.getalluser = getalluser;
const deleteusers = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteusers = await (0, users_1.deleteUserbyID)(id);
        return res.json(deleteusers);
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
exports.deleteusers = deleteusers;
const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { username } = req.body;
        if (!username) {
            return res.sendStatus(400);
        }
        const user = await (0, users_1.getuserID)(id);
        user.username = username;
        await user.save();
        return res.status(200).json(user).end();
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
exports.updateUser = updateUser;
