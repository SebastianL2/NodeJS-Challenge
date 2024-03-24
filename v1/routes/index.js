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
 *     responses:
 *       '200':
 *         description: OK
 * 
 * @openapi
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
 * @openapi
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
 *     responses:
 *       '200':
 *         description: OK
 *
 * @openapi
 * /v1/products:
 *   post:
 *     summary: Crear un Producto
 *     operationId: createProduct
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               stock:
 *                 type: integer
 *               price:
 *                 type: number
 *               brand_special_price:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     userId:
 *                       type: string
 *                     special_price:
 *                       type: number
 *     responses:
 *       '200':
 *         description: OK
 * 
 * @openapi
 * /v1/products:
 *   get:
 *     summary: Obtener Productos en stock
 *     operationId: getProductsInStock
 *     responses:
 *       '200':
 *         description: OK
 * @openapi
 * /v1/products/price/{userId}/{productName}:
 *   get:
 *     summary: Obtener Precios por usuarios y nombre de producto
 *     operationId: getProductPrice
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *       - name: productName
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: OK
 * 
 * @openapi
 * /v1/products:
 *   get:
 *     summary: Obtener todos los productos
 *     operationId: getAllProducts
 *     responses:
 *       '200':
 *         description: OK
 * 
 * @openapi
 * /v1/products/{id}:
 *   get:
 *     summary: Obtener un producto por su ID
 *     operationId: getProductById
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: OK
 * 
 * @openapi
 * /v1/products/{id}:
 *   delete:
 *     summary: Eliminar un producto por su ID
 *     operationId: deleteProductById
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: OK
 * 
 * @openapi
 * /v1/products/{id}:
 *   patch:
 *     summary: Actualizar un producto por su ID
 *     operationId: updateProductById
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
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               stock:
 *                 type: integer
 *               price:
 *                 type: number
 *               brand_special_price:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     userId:
 *                       type: string
 *                     special_price:
 *                       type: number
 *     responses:
 *       '200':
 *         description: OK
 */

const router = Router();
router.use('/users', userRouter);
router.use('/Products', ProductRouter)

export default router;