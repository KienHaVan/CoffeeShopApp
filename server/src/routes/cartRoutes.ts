import { Router } from 'express';

const router = Router();

router
  .get('/:id', (req, res) => {}) // get the cart
  .post('/', (req, res) => {}) // create a new cart
  .put('/:id', (req, res) => {}); // update cart

export default router;
