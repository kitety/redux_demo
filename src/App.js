import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { increment, decrement } from './actions'
//decrement increment 是函数

class App extends Component {
  render() {
    // 声明了mapDispatchToProps,在this.props中就取不到了
    console.dir(this.props)
    const { incrementF, decrementF } = this.props;

    // const { dispatch } = this.props;
    // const dispatch=this.props.dispatch
    console.dir(this.props);
    return (
      <div className="container">
        <h1 className="jumpbotron-heading text-center">{this.props.counter}</h1>
        <h1 className="jumpbotron-heading text-center">{this.props.name}</h1>
        <p className="text-center">
          <button onClick={() => incrementF('增加')} className="btn btn-primary mr-2">Increase</button>
          <button onClick={() => decrementF('减少')} className="btn btn-danger my-2">Decrease</button>
        </p>
      </div>
    );
  }
}

// state 在这里代表了store.getState()
// 这是个函数
// state变到props中
const mapStateToProps = (state) => {
  // console.log(state);
  return {
    counter: state.counter,
    name: state.user,
  }
}
//increment action中的函数,返回对象
//incrementF 定义this.props中的函数
// dispatch变到props中
// 就是换一种方式,其实跟this.props.dispatch({type:xxx,name=xxx})差不多
const mapDispatchToProps = (dispatch) => {
  return {
    incrementF: (name) => {
      dispatch(increment(name))
    },
    decrementF: (name) => {
      dispatch(decrement(name))
    }
  }
}
App.propTypes = {
  counter: PropTypes.number.isRequired
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
//之前的
//<button onClick={() => dispatch({ type: "DECREMENT" })} className="btn btn-danger my-2">Decrease</button>
/////////////6
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
