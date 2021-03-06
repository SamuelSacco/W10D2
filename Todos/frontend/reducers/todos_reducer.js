import { RECEIVE_TODOS,
         RECEIVE_TODO, 
         REMOVE_TODO} from "../actions/todo_actions";

const initialState = {
    1: {
        id: 1,
        title: "wash car",
        body: "with soap",
        done: false
    },
    2: {
        id: 2,
        title: "wash dog",
        body: "with shampoo",
        done: true
    }
};

const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = {};
  
  switch (action.type) {
    case RECEIVE_TODOS:
      for (let i = 0; i < action.todos.length; i++) {
        let todo = action.todos[i];
        
        newState[todo.id] = todo;
      }
      
      return newState;
      
      case RECEIVE_TODO:
      debugger
      newState = Object.assign({}, state);
      newState[action.todo.id] = action.todo;
      
      return newState;

    case REMOVE_TODO:
      newState = Object.assign({}, state);
      delete newState[action.todo.id];

      return newState;

    default:
        return state;
    }
};

export default todosReducer;