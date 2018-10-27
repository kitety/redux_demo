import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducer'
// import { increment, decrement } from './actions';
// 引入顶级组件
import { Provider } from 'react-redux';
//index其实可以省略
// 传递过来的是方法,因此要执行

// 函数的嵌套
const logger = store => next => action => {
  console.log('dispatching', action);
  let result = next(action)
  console.log('next state', store.getState());
  return result;
}
const err = store => next => action => {
  try {
    next(action);
    // 进入下一个中间件,但是没有下一个中间件了,就进入reducer
  } catch (e) {
    console.error('err' + e);
  }
}
// es5版本
// const logger1 = function (store) {
//   return function (next) {
//     return function (action) {
//       console.log('dispatching', action);
//       let result = next(action)
//       console.log('next state', store.getState());
//       return result;
//     }
//   }
// }

const store = createStore(rootReducer, {}, applyMiddleware(logger, err))
// store.subscribe(() => console.log("State update!", store.getState()))
// store.dispatch({
//   type: 'INCREMENT'
// })

// <App store={store} />
// app.js <h1 className="jumpbotron-heading text-center">{this.props.store.getState}</h1>
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
// ---redux版本---
// const render = () => {
//   ReactDOM.render(
//     <App
//       value={store.getState()}
//       onIncrement={() => store.dispatch(increment())}
//       onDecrement={() => store.dispatch(decrement())}
//     />,
//     document.getElementById('root')
//   );
// }
// render();
// store.subscribe(render)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
