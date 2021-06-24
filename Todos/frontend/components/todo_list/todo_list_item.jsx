import React from 'react'

export default class TodoListItem extends React.Component {
    constructor(props){
        super(props);
    }

    render (){
        return (
            <li key={this.props.todo.id}>
                {this.props.todo.title}
            </li>
        )
    }
}