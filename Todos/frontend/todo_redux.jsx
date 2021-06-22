import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
// import { receiveTodo } from './actions/todo_actions';
// import { receiveTodos } from './actions/todo_actions';
import * as todoActions from './actions/todo_actions';

document.addEventListener('DOMContentLoaded', () => {
    // console.log(receiveTodo);
    const store = configureStore();
    window.todoActions = todoActions;
    window.store = store;
    // window.receiveTodo = receiveTodo;
    // window.receiveTodos = receiveTodos;

    const root = document.getElementById("root");
    ReactDOM.render(<h1>Todos App</h1>, root);
})