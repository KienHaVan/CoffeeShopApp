import { Router } from 'express';
import {
  createProduct,
  getAllProducts,
  getProduct,
} from '../controllers/productControllers';
import { verifyJWT } from '../middleware/verifyJWT';

const router = Router();

router.use(verifyJWT);

router
  .get('/', getAllProducts) // get all products
  .get('/:id', getProduct) // get one product
  .post('/', createProduct); // create a new product

export default router;
