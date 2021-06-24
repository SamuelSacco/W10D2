import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root'
import { receiveTodo } from './actions/todo_actions';
import { receiveTodos } from './actions/todo_actions';
import { removeTodo } from './actions/todo_actions'
import { receiveStep } from './actions/step_actions';
import { receiveSteps } from './actions/step_actions';
import { removeStep } from './actions/step_actions';
import { getAllTodos } from './reducers/selectors';
// import * as todoActions from './actions/todo_actions';

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();

    window.store = store;
    // window.receiveTodo = receiveTodo;
    // window.receiveTodos = receiveTodos;
    // window.removeTodo = removeTodo;
    // window.receiveStep = receiveStep;
    // window.receiveSteps = receiveSteps;
    // window.removeStep = removeStep;
    // window.getAllTodos = getAllTodos;

    const root = document.getElementById("content");
    ReactDOM.render(<Root store={store}/>, root);
})