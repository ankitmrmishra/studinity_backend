"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUSerbyiD = exports.deleteUserbyID = exports.createUser = exports.getuserID = exports.getUserbySessionToken = exports.getUserbyEmail = exports.getUsers = exports.Usermodel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    authentication: {
        password: { type: String, required: true, select: false },
        salt: { type: String, select: false },
        sessionToken: { type: String, select: false },
    },
});
exports.Usermodel = mongoose_1.default.model("User", userSchema);
const getUsers = () => exports.Usermodel.find();
exports.getUsers = getUsers;
const getUserbyEmail = (email) => exports.Usermodel.findOne({ email });
exports.getUserbyEmail = getUserbyEmail;
const getUserbySessionToken = (sessionToken) => exports.Usermodel.findOne({
    "authentication.sessionToken": sessionToken,
});
exports.getUserbySessionToken = getUserbySessionToken;
const getuserID = (id) => exports.Usermodel.findById(id);
exports.getuserID = getuserID;
const createUser = (values) => new exports.Usermodel(values).save().then((user) => user.toObject());
exports.createUser = createUser;
const deleteUserbyID = (id) => exports.Usermodel.findOneAndDelete({ _id: id });
exports.deleteUserbyID = deleteUserbyID;
const updateUSerbyiD = (id, values) => exports.Usermodel.findByIdAndUpdate(id, values);
exports.updateUSerbyiD = updateUSerbyiD;
