import { INCREMENT, DECREMENT } from '../constants/index';
// import * as types from '../constants/index';
//注意引用的形式 types.INCREMENT
export const increment = (name) => {
  return {
    type: INCREMENT,
    name
  }
}
export const decrement = (name) => {
  return {
    type: DECREMENT,
    name
  }
}
// 注意 暴露的是两个函数 要执行

