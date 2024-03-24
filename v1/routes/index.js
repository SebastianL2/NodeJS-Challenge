import { Router } from 'express';
import {userRouter} from '../../apiServices/users/route.js';
import { ProductRouter } from '../../apiServices/products/route.js'

/**
 * @openapi
 * /v1/users:
 *   get:
 *     summary: Obtener todos los usuarios
 *     operationId: getAllUsers
 *     responses:
 *       '200':
 *         description: OK
 *
 * /v1/users/signUp:
 *   post:
 *     summary: Crear un usuario registrándose
 *     operationId: createUser
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               registeredAt:
 *                 type: string
 *                 format: date-time
 *               role:
 *                 type: string
 *     responses:
 *       '200':
 *         description: OK
 * /v1/users/signIn:
 *   post:
 *     summary: Iniciar sesión
 *     operationId: signIn
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       '200':
 *         description: OK
 *
 * /v1/users/{id}:
 *   get:
 *     summary: Obtener un usuario por su ID
 *     operationId: getUserById
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: OK
 *   delete:
 *     summary: Eliminar un usuario por su ID
 *     operationId: deleteUserById
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: OK
 *   patch:
 *     summary: Actualizar un usuario por su ID
 *     operationId: updateUserById
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               registeredAt:
 *                 type: string
 *                 format: date-time
 *               role:
 *                 type: string
 *     responses:
 *       '200':
 *         description: OK
  * /v1/Productos/privates:
 *   get:
 *     summary: Obtener Productos privados solo si estás registrado
 *     operationId: getPrivateProductos
 *     parameters:
 *       - name: x-access-token
 *         in: header
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: OK
 *
 * /v1/Productos/publics:
 *   get:
 *     summary: Obtener Productos públicos
 *     operationId: getPublicProductos
 *     responses:
 *       '200':
 *         description: OK
 *
 * /v1/Productos:
 *   get:
 *     summary: Obtener todos los Productos
 *     operationId: getAllProductos
 *     parameters:
 *       - name: x-access-token
 *         in: header
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: OK
 *   post:
 *     summary: Crear un nuevo video
 *     operationId: createVideo
 *     parameters:
 *       - name: x-access-token
 *         in: header
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               credits:
 *                 type: string
 *               publicationDate:
 *                 type: string
 *                 format: date-time
 *               isPublic:
 *                 type: string
 *               uploader:
 *                 type: string
 *               year:
 *                 type: string
 *               director:
 *                 type: string
 *               duration:
 *                 type: string
 *               rate:
 *                 type: string
 *               poster:
 *                 type: string
 *               genre:
 *                 type: string
 *               url:
 *                 type: string
 *               videoFile:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *     responses:
 *       '200':
 *         description: OK
 
 * /v1/Productos/{id}:
 *   get:
 *     summary: Obtener un video por su ID
 *     operationId: getVideoById
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: OK
 *   delete:
 *     summary: Eliminar un video por su ID
 *     operationId: deleteVideoById
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: OK
 *   patch:
 *     summary: Actualizar un video por su ID
 *     operationId: updateVideoById
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               credits:
 *                 type: string
 *               publicationDate:
 *                 type: string
 *                 format: date-time
 *               isPublic:
 *                 type: string
 *               year:
 *                 type: string
 *               director:
 *                 type: string
 *               duration:
 *                 type: string
 *               rate:
 *                 type: string
 *               poster:
 *                 type: string
 *               genre:
 *                 type: string
 *               url:
 *                 type: string
 *     responses:
 *       '200':
 *         description: OK
 */
const router = Router();
router.use('/users', userRouter);
router.use('/Products', ProductRouter)

export default router;