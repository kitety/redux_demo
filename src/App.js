import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="jumpbotron-heading text-center">{this.props.value}</h1>
        <p className="text-center">
          <button className="btn btn-primary mr-2" onClick={this.props.onIncrement}>Increase</button>
          <button className="btn btn-danger my-2" onClick={this.props.onDecrement}>Decrease</button>
        </p>
      </div>
    );
  }
}
App.propsTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
}

export default App;
