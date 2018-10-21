import { INCREMENT, DECREMENT } from '../constans/index';
// import * as types from '../constans/index';
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

