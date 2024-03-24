import { Router } from 'express'

import { VideoController } from './controller.js'
import { verifyToken } from '../../middlewares/authJwt.js';
export const ProductRouter = Router()


ProductRouter.get('/all', VideoController.getAll)
ProductRouter.get('',VideoController.getByStock)
ProductRouter.get('/price/:user_id/:nombre_producto',VideoController.getByEspecialPrice)
ProductRouter.post('/', VideoController.create)
ProductRouter.get('/:id', VideoController.getById)
ProductRouter.delete('/:id',verifyToken, VideoController.delete)
ProductRouter.patch('/:id',verifyToken, VideoController.update)

