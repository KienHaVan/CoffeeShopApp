import { Router } from 'express';
import {
  DeleteUser,
  getAllUsers,
  getUser,
  updateUser,
} from '../controllers/userControllers';
import { verifyJWT } from '../middleware/verifyJWT';

const router = Router();

router.use(verifyJWT);

router
  .get('/', getAllUsers) // get all users
  .get('/:id', getUser) // get one user
  .put('/:id', updateUser) // update user
  .delete('/:id', DeleteUser); // delete one user

export default router;
