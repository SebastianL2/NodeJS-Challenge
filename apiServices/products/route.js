import { Router } from 'express'

import { VideoController } from './controller.js'
import { verifyToken } from '../../middlewares/authJwt.js';
export const ProductoRouter = Router()


ProductoRouter.get('/all', VideoController.getAll)
ProductoRouter.get('',VideoController.getByStock)
ProductoRouter.get('/price/:user_id/:nombre_producto',VideoController.getByEspecialPrice)
ProductoRouter.post('/', VideoController.create)
ProductoRouter.get('/:id', VideoController.getById)
ProductoRouter.delete('/:id',verifyToken, VideoController.delete)
ProductoRouter.patch('/:id',verifyToken, VideoController.update)

