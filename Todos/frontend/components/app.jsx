import React from 'react';
import { Component } from 'react';
import  TodoListContainer from './todo_list/todo_list_container';

const App = () => {
    return (
        <>
            <TodoListContainer />
        </>
    )
}
// *DAFUQ
// class App extends React.Component {
//     constructor(props){
//         super(props);
//     }

//     render(){
//         return(
//             <h1>App</h1>
//         )
//     }
// }

export default App;