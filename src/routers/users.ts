import express from 'express';
import { getalluser , deleteusers, updateUser } from '../controllers/users';
import { isAuthenticated , isOwner } from '../middlewares';
export default (router: express.Router) => {
    router.get('/users' , isAuthenticated, getalluser)
    router.delete('/users/:id', isAuthenticated, isOwner, deleteusers)
    router.patch('/users/:id' , isAuthenticated , isOwner , updateUser)
}
