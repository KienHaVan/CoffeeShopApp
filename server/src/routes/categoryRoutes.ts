import { Router } from 'express';
import { getAllCategories } from '../controllers/categoryControllers';
import { verifyJWT } from '../middleware/verifyJWT';

const router = Router();

router.use(verifyJWT);

router.get('/', getAllCategories); // get all categories

export default router;
