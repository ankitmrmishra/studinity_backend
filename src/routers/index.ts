import express from "express";
import authent from "./authent";
import users from "./users";

const router = express.Router();
export default (): express.Router => {
  authent(router);
  users(router)
  return router;
};
