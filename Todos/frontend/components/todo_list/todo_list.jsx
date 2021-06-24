import React from "react"
import TodoListItem from "./todo_list_item"
import TodoForm from "./todo_form"

export default class TodoList extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        const todoLis = this.props.todos.map(todo =>{
            return (
                <TodoListItem key={todo.id} todo={todo}/>
            )
        })

        return (
            <div>
                <TodoForm receiveTodo={ receiveTodo }/>
                <h1>
                    All Todos
                </h1>
                <ul>
                    {todoLis}
                </ul>
            </div>
        )
    }
}