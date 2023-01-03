import Posts from "../models/posts";

class TodoRepository {
    private todoModel = Posts;

    findAllTodos = async () => {
        return this.todoModel.findAll();
    };

    createdTodo = async (title: string, content: string) => {
        return this.todoModel.create({ title, content });
    };

    updatedTodo = async (title: string, content: string, postId: number) => {
        return this.todoModel.update({ title, content }, { where: { postId } });
    };

    deletedTodo = async (postId: number) => {
        return this.todoModel.destroy({ where: { postId } });
    };
}

export default TodoRepository;
