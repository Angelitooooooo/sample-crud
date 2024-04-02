import * as TodoModel from '../src/models';

describe('CRUD API Tests', () => {
  let testTodoId: number;

  beforeAll(() => {
    const testTodo = { id: 999, title: 'Test Todo', completed: false };
    TodoModel.addTodo(testTodo);
    testTodoId = testTodo.id;
  });

  afterAll(() => {
    TodoModel.deleteTodo(testTodoId);
  });

  it('should add a new todo', () => {
    const newTodo = { id: 123, title: 'New Todo', completed: false };

    TodoModel.addTodo(newTodo);
    const addedTodo = TodoModel.getTodoById(123);

    expect(addedTodo).toEqual(newTodo);
  });

  it('should get all todos', () => {
    const todos = TodoModel.getAllTodos();

    expect(Array.isArray(todos)).toBe(true);
    expect(todos.length).toBeGreaterThan(0);
  });

  it('should get a todo by id', () => {
    const todo = TodoModel.getTodoById(testTodoId);

    expect(todo).toBeDefined();
    expect(todo?.id).toBe(testTodoId);
  });

  it('should update a todo', () => {
    const updatedTodo = { id: testTodoId, title: 'Updated Todo', completed: true };

    TodoModel.updateTodo(testTodoId, updatedTodo);
    const todo = TodoModel.getTodoById(testTodoId);

    expect(todo).toEqual(updatedTodo);
  });

  it('should delete a todo', () => {
    TodoModel.deleteTodo(testTodoId);
    const deletedTodo = TodoModel.getTodoById(testTodoId);

    expect(deletedTodo).toBeUndefined();
  });
});
