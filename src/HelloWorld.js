import React, { Component } from 'react';
import './HelloWorld.css';

class HelloWorld extends Component {
  render(){
    return(
      <div className="HelloWorld">
        {this.state.greeting} {this.props.name}<br />
        <button onClick={this.removeGreeting}>Remove Me!</button>

      </div>
    );
  }
  constructor(props) {
    super(props);
    this.state = { greeting: '' };
    this.Inglish = this.Inglish.bind(this);
    this.removeGreeting = this.removeGreeting.bind(this);
  }

  removeGreeting() {
    this.props.removeGreeting(this.props.name);
  }

  Inglish() {
  this.setState({ greeting: 'hello' });
  }
};

export default HelloWorld;
