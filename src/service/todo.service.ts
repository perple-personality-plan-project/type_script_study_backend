import TodoRepository from "../repository/todo.repository";

class TodoService {
    constructor(private readonly todoRepository: TodoRepository) {}

    findAllTodos = async () => {
        return this.todoRepository.findAllTodos();
    };

    createdTodo = async (title: string, content: string) => {
        return this.todoRepository.createdTodo(title, content);
    };

    updatedTodo = async (title: string, content: string, postId: number) => {
        const existUpdated: number[] = await this.todoRepository.updatedTodo(
            title,
            content,
            postId
        );

        return existUpdated;
    };

    deletedTodo = async (postId: number) => {
        const existDeleted: number = await this.todoRepository.deletedTodo(
            postId
        );

        return existDeleted;
    };
}

export default TodoService;
