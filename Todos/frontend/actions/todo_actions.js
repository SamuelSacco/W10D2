export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

export const receiveTodo = todo => {
    debugger
    return {
        type: RECEIVE_TODO,
        todo, // *dafuq
    };
};

export const receiveTodos = todos => {
    return {
        type: RECEIVE_TODOS,
        todos, // *dafuq [{ id: 1, ...etc }, { id: 2, ...etc }, ...etc]
    };
};


export const removeTodo = todo => {
    return {
        type: REMOVE_TODO,
        todo,
    }
}