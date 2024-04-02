export interface Todo {
    id: number;
    title: string;
    completed: boolean;
  }
  
  let todos: Todo[] = [
    { id: 1, title: 'Eat', completed: false },
    { id: 2, title: 'Sleep', completed: true },
    { id: 3, title: 'Work', completed: true },
  ];
  
  export const getAllTodos = (): Todo[] => todos;
  
  export const getTodoById = (id: number): Todo | undefined =>
    todos.find((todo) => todo.id === id);
  
  export const addTodo = (todo: Todo): void => {
    todos.push(todo);
  };
  
  export const updateTodo = (id: number, updatedTodo: Todo): void => {
    todos = todos.map((todo) => (todo.id === id ? updatedTodo : todo));
  };
  
  export const deleteTodo = (id: number): void => {
    todos = todos.filter((todo) => todo.id !== id);
  };
  