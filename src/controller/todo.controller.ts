import TodoService from "../service/todo.service";
import { RequestHandler } from "express";

class TodoController {
    constructor(private todoService: TodoService) {}

    findAllTodos: RequestHandler = async (req, res, next) => {
        const todoList = await this.todoService.findAllTodos();

        res.status(200).json({ todo: todoList });
    };

    createdTodo: RequestHandler = async (req, res, next) => {
        const { title, content } = req.body as {
            title: string;
            content: string;
        };

        const test = await this.todoService.createdTodo(title, content);

        res.status(200).json({ message: "등록되었습니다." });
    };

    updatedTodo: RequestHandler<{ postId: number }> = async (
        req,
        res,
        next
    ) => {
        const postId = req.params.postId;

        const { title, content } = req.body as {
            title: string;
            content: string;
        };

        await this.todoService.updatedTodo(title, content, postId);

        res.status(200).json({ message: "수정되었습니다." });
    };

    deletedTodo: RequestHandler<{ postId: number }> = async (
        req,
        res,
        next
    ) => {
        const postId = req.params.postId;

        await this.todoService.deletedTodo(postId);

        res.status(200).json({ message: "삭제되었습니다." });
    };
}

export default TodoController;
