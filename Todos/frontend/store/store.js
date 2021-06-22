import { createStore }from 'redux';
import rootReducer from '../reducers/root_reducer'; //* dafuq

const configureStore = (preloadedState = {}) => {
    return createStore(rootReducer, preloadedState);
}

export default configureStore; // *dafuq