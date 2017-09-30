import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form'
import TodoList from './TodoList'

class TODO extends Component {
  constructor(){
    super();
    this.state={
      todos:[]
    }
    this.submitHandler=this.submitHandler.bind(this)
  }
  submitHandler(e){
    e.preventDefault();
    const title = e.target.elements[0].value;
    if (!title) {
      return;
    }
    const desc = e.target.elements[1].value;
    const todos = this.state.todos.slice();
    todos.push({
      title:title,
      desc:desc,
      done:false
    })
    this.setState({todos:todos})
  }
  render() {
    return (
      <div className="App">
        <Form onSubmit={this.submitHandler} />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default TODO;
