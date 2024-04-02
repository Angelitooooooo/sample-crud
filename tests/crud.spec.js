"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const TodoModel = __importStar(require("../src/models"));
describe('CRUD API Tests', () => {
    let testTodoId;
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
        expect(todo === null || todo === void 0 ? void 0 : todo.id).toBe(testTodoId);
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
//# sourceMappingURL=crud.spec.js.map