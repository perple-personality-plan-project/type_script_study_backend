import { Router } from "express";
import TodoController from "../controller/todo.controller";
import TodoService from "../service/todo.service";
import TodoRepository from "../repository/todo.repository";

const router = Router();

const todoRepository = new TodoRepository();
const todoService = new TodoService(todoRepository);
const todoController = new TodoController(todoService);

router.get("/", todoController.findAllTodos);
router.post("/", todoController.createdTodo);
router.put("/:postId", todoController.updatedTodo);
router.delete("/:postId", todoController.deletedTodo);

export default router;
