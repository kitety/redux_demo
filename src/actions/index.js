import { INCREMENT, DECREMENT } from '../constants/index';
// import * as types from '../constants/index';
//注意引用的形式 types.INCREMENT
export const increment = () => {
  return {
    type: INCREMENT
  }
}
export const decrement = () => {
  return {
    type: DECREMENT
  }
}

