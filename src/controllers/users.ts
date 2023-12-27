import express from 'express';

import { deleteUserbyID, getUsers , getuserID } from '../db/users';

export const getalluser = async (req: express.Request, res: express.Response) => {
    try {
        const users = await getUsers();
        return res.json(users);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}
export const deleteusers = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;
        const deleteusers = await deleteUserbyID(id);
       
        return res.json(deleteusers);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

export const updateUser = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const { username } = req.body;

    if (!username) {
      return res.sendStatus(400);
    }

    const user = await getuserID(id);
    
    user.username = username;
    await user.save();

    return res.status(200).json(user).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}