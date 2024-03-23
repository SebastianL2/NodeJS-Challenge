import { Router } from 'express'

import { VideoController } from './controller.js'
import { verifyToken } from '../../middlewares/authJwt.js';
export const ProductoRouter = Router()


ProductoRouter.get('/',VideoController.getByStock)
ProductoRouter.post('/',verifyToken, VideoController.create)
ProductoRouter.get('/:id', VideoController.getById)
ProductoRouter.delete('/:id',verifyToken, VideoController.delete)
ProductoRouter.patch('/:id',verifyToken, VideoController.update)

