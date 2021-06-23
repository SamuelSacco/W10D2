import React from "react"
import TodoListItem from "./todo_list_item"

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