export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";

export const receiveTodos = todos => {
    return {
        type: RECEIVE_TODOS,
        todos, // *dafuq [{ id: 1, ...etc }, { id: 2, ...etc }, ...etc]
    };
};

export const receiveTodo = todo => {
    return {
        type: RECEIVE_TODO,
        todo, // *dafuq
    };
};