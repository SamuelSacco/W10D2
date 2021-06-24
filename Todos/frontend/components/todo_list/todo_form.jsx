import React from 'react';
import uniqueId from '../../../util/unique_id';

class TodoForm extends React.Component {
    constructor(props){
        super(props) 
        this.state = {
            title: '',
            body: '',
            done: false
        }
        
        this.updateTitle = this.updateTitle.bind(this);
        this.updateBody = this.updateBody.bind(this);
        this.updateDone = this.updateDone.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    updateTitle(e) {
        this.setState({title: e.target.value})
    };
    
    updateBody(e){
        this.setState({body: e.target.value })
    };
    
    updateDone(e){
        this.setState({done: e.target.value })
    };
    
    handleSubmit(e){
        debugger
        e.preventDefault();
        const todo = Object.assign({}, this.state, {id: uniqueId()})
        this.props.receiveTodo(todo)
        this.setState({
            title: "",
            body: ""
        }) // reset form
    };
    
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <h1>Add Todo</h1>
            <label>Title 
                <input type="text" onChange={this.updateTitle} value={this.state.title}/>
            </label>
            <br/>
            <label>Body
                <input type="text" onChange={this.updateBody} value={this.state.body} />
            </label>
            <br/>
            <label htmlFor="">Done: 
            <label>True
                <input type="radio" name="done" onChange={this.updateDone} value={this.state.done} />
            </label>
            <label>False
                <input type="radio" name="done" onChange={this.updateDone} value={this.state.done} defaultChecked/>
            </label>
            </label>
            <br />
            <button>Submit</button>
        </form>
        )
    }
}

export default TodoForm;