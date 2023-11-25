import { Router } from 'express';
import {
  login,
  logout,
  refreshToken,
  register,
} from '../controllers/authControllers';

const router = Router();

router
  .post('/', login) // login
  .post('/register', register) // login
  .get('/refresh', refreshToken) // refresh token
  .post('/logout', logout); // logout

export default router;
