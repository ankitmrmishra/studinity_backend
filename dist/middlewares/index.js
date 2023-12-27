"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isOwner = exports.isAuthenticated = void 0;
const lodash_1 = require("lodash");
const users_1 = require("../db/users");
const isAuthenticated = async (req, res, next) => {
    try {
        const sessionToken = req.cookies['STUDINITY'];
        if (!sessionToken) {
            return res.sendStatus(403);
        }
        const existuser = await (0, users_1.getUserbySessionToken)(sessionToken);
        if (!existuser) {
            return res.sendStatus(403);
        }
        (0, lodash_1.merge)(req, { identity: existuser });
        return next();
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
exports.isAuthenticated = isAuthenticated;
const isOwner = async (req, res, next) => {
    try {
        const { id } = req.params;
        const currentUserId = (0, lodash_1.get)(req, 'identity._id');
        if (!currentUserId) {
            return res.sendStatus(400);
        }
        if (currentUserId.toString() !== id) {
            return res.sendStatus(403);
        }
        next();
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
exports.isOwner = isOwner;
