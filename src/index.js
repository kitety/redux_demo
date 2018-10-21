import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import reducer from './reducer/counter'
import { increment, decrement } from './actions';
//index其实可以省略
// 传递过来的是方法,因此要执行


const store = createStore(reducer)
// store.subscribe(() => console.log("State uodate!", store.getState()))
// store.dispatch({
//   type: 'INCREMENT'
// })

const render = () => {
  ReactDOM.render(
    <App
      value={store.getState()}
      onIncrement={() => store.dispatch(increment())}
      onDecrement={() => store.dispatch(decrement())}
    />,
    document.getElementById('root')
  );
}

render();
store.subscribe(render)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
