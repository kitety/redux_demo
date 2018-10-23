import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="jumpbotron-heading text-center">{this.props.counter}</h1>
        <h1 className="jumpbotron-heading text-center">{this.props.name}</h1>
        <p className="text-center">
          <button className="btn btn-primary mr-2">Increase</button>
          <button className="btn btn-danger my-2">Decrease</button>
        </p>
      </div>
    );
  }
}

// state 在这里代表了store.getState()
// 这是个函数
const mapStateToProps = (state) => {
  console.log(state);
  return {
    counter: state.counter,
    name: state.user,
  }
}
App.propTypes={
  counter:PropTypes.number.isRequired

}
export default connect(mapStateToProps)(App);


// ---redux版本---
// class App extends Component {
//   render() {
//     return (
//       <div className="container">
//         <h1 className="jumpbotron-heading text-center">{this.props.value}</h1>
//         <p className="text-center">
//           <button className="btn btn-primary mr-2" onClick={this.props.onIncrement}>Increase</button>
//           <button className="btn btn-danger my-2" onClick={this.props.onDecrement}>Decrease</button>
//         </p>
//       </div>
//     );
//   }
// }
// App.propsTypes = {
//   value: PropTypes.number.isRequired,
//   onIncrement: PropTypes.func.isRequired,
//   onDecrement: PropTypes.func.isRequired,
// }

// context 侵入式
// <h1 className="jumpbotron-heading text-center">{this.context.store.getState()}</h1>
// App.contextTypes = {
//   store: PropTypes.object
// }
