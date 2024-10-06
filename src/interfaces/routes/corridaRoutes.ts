import { Router } from 'express';
import { CorridaController } from '../controllers/CorridaController';
import validateRequest from '../middlewares/validateRequest';
import { createCorridaSchema, cancelCorridaSchema } from '../validators/corridaValidator';

const router = Router();
const corridaController = new CorridaController();

/**
 * @swagger
 * tags:
 *   name: Corridas
 *   description: API para gerenciar corridas
 */

/**
 * @swagger
 * /api/corridas:
 *   post:
 *     summary: Cria uma nova corrida
 *     tags: [Corridas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - usuarioId
 *               - origem
 *               - destino
 *             properties:
 *               usuarioId:
 *                 type: integer
 *                 description: ID do usuário que está solicitando a corrida
 *               origem:
 *                 type: string
 *                 description: Local de origem da corrida
 *               destino:
 *                 type: string
 *                 description: Local de destino da corrida
 *     responses:
 *       201:
 *         description: Corrida criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Corrida'
 *       400:
 *         description: Requisição inválida
 */

/**
 * @swagger
 * /api/corridas/{id}:
 *   delete:
 *     summary: Cancela uma corrida existente
 *     tags: [Corridas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da corrida a ser cancelada
 *     responses:
 *       200:
 *         description: Corrida cancelada com sucesso
 *       400:
 *         description: Requisição inválida ou corrida não encontrada
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Corrida:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: ID da corrida
 *         usuarioId:
 *           type: integer
 *           description: ID do usuário que solicitou a corrida
 *         origem:
 *           type: string
 *           description: Local de origem da corrida
 *         destino:
 *           type: string
 *           description: Local de destino da corrida
 *         status:
 *           type: string
 *           enum: [PENDENTE, EM_ANDAMENTO, CONCLUIDA, CANCELADA]
 *           description: Status atual da corrida
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Data e hora de criação da corrida
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Data e hora da última atualização da corrida
 */

router.post(
  '/',
  validateRequest(createCorridaSchema, 'body'),
  (req, res, next) => corridaController.create(req, res, next)
);

router.delete(
  '/:id',
  validateRequest(cancelCorridaSchema, 'params'),
  (req, res, next) => corridaController.cancel(req, res, next)
);

export default router;
