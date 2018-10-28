import { FETCH_USER_SUCCESS, FETCH_USER_REQUEST, FETCH_USER_FAILURE, LOAD_USER_FULFILLED, LOAD_USER_REJECTED, LOAD_USER_PENDING } from '../constants';
const initialState = {
  isFetching: false,
  error: null,
  user: {}
}
const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
    case LOAD_USER_FULFILLED:
      let a = ~~(20 * Math.random())
      return {
        isFetching: false,
        error: null,
        user: action.payload.data.articles[a]
      }
    case FETCH_USER_REQUEST:
    case LOAD_USER_PENDING:
      return {
        isFetching: true,
        error: null,
        user: {}
      }
    case FETCH_USER_FAILURE:
    case LOAD_USER_REJECTED:
      return {
        isFetching: false,
        error: action.payload.response.data,
        user: {}
      }
    default:
      return state
  }
}
export default user;
