import React, {Component} from 'react'

class Form extends Component{
  render(){
    return(
      <div>
        <form onSubmit={this.props.onSubmit}>
          <input type='text'></input>
          <button type="submit">ADD</button>
        </form>
      </div>
    );
  }
}

export default Form
