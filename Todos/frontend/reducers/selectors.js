export const getAllTodos = (state) => (
    Object.keys(state.todos).map(id => state.todos[id])
);

// {1: todo} => [todo]