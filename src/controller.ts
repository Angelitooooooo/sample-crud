import { Request, Response } from 'express';
import * as TodoModel from './models';

export const getAllTodos = (req: Request, res: Response): void => {
  const todos = TodoModel.getAllTodos();
  res.json(todos);
};

export const getTodoById = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id, 10);
  const todo = TodoModel.getTodoById(id);
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).send('Todo not found');
  }
};

export const createTodo = (req: Request, res: Response): void => {
  const { title, completed } = req.body;
  const newTodo: TodoModel.Todo = { id: Date.now(), title, completed };
  TodoModel.addTodo(newTodo);
  res.status(201).json(newTodo);
};

export const updateTodo = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id, 10);
  const { title, completed } = req.body;
  const updatedTodo: TodoModel.Todo = { id, title, completed };
  TodoModel.updateTodo(id, updatedTodo);
  res.json(updatedTodo);
};

export const deleteTodo = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id, 10);
  TodoModel.deleteTodo(id);
  res.status(204).send();
};
