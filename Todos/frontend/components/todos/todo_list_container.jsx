import React from 'react'
import { connect } from "react-redux"
import { getAllTodos } from "../../reducers/selectors.js"
import { receiveTodo } from "../../actions/todo_actions.js"
import TodoList from "./todo_list.jsx"

const mapStateToProps = (state) => {
    return {
        todos: getAllTodos(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        receiveTodo: todo => {return dispatch(receiveTodo(todo))}
    } // * DAFUQQQQQ
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);