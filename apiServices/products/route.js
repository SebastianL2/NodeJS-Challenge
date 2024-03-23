import { Router } from 'express'

import { VideoController } from './controller.js'
import { verifyToken } from '../../middlewares/authJwt.js';
export const ProductoRouter = Router()


videosRouter.get('/',verifyToken, VideoController.getAll)
videosRouter.get('/producs',VideoController.getByStock)
videosRouter.post('/',verifyToken, VideoController.create)
videosRouter.get('/:id', VideoController.getById)
videosRouter.delete('/:id',verifyToken, VideoController.delete)
videosRouter.patch('/:id',verifyToken, VideoController.update)

