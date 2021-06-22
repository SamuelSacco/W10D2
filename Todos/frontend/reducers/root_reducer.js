import {combineReducers} from 'redux';

import todosReducer from './todos_reducer'; //* dafuq (why no curly here)

const rootReducer = combineReducers({
    todos: todosReducer
})

export default rootReducer;