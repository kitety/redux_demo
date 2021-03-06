import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducer'

const configureStore = preloadedStore => {
  const store = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(logger, thunk, promise())))
  if (process.env.NODE_ENV !== "production") {
    if (module.hot) {
      module.hot.accept('../reducer', () => {
        store.replaceReducer(rootReducer)
      })
    }
  }

  return store;
}
export default configureStore;
