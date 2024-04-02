import express from 'express';
import * as TodoController from './controller';

const router = express.Router();

router.get('/todos', TodoController.getAllTodos);
router.get('/todos/:id', TodoController.getTodoById);
router.post('/todos', TodoController.createTodo);
router.put('/todos/:id', TodoController.updateTodo);
router.delete('/todos/:id', TodoController.deleteTodo);

export default router;
