import React from 'react';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      desc: props.desc,
      done: props.done
    };
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler(e){
    e.preventDefault();
    this.setState({
      done: !this.state.done
    });
  }

  render(){
    const btn = this.state.done? 'Undone':'Done';
    const className = this.state.done? 'done':null;
    return(
      <li>
        <span className={className}>{this.state.title}</span>
        <button onClick={this.clickHandler}>{btn}</button>
      </li>
    );
  }
}

export default Todo
