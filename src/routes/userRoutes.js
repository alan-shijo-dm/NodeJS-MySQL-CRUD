import express from 'express';
import { createUser, createUserForm, deleteUser, getUser, listUsers, updateUser, updateUserForm } from '../controllers/userController.js';

const router = express.Router();

router.get('/', listUsers);
router.get('/create', createUserForm);
router.post('/', createUser);
router.get('/:id/edit', updateUserForm);
router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;