import { Router } from 'express';
import {userRouter} from '../../apiServices/users/route.js';
import { ProductoRouter } from '../../apiServices/products/route.js'


const router = Router();
router.use('/users', userRouter);
router.use('/products', ProductoRouter)

export default router;