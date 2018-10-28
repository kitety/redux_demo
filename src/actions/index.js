import { INCREMENT, DECREMENT, FETCH_USER_SUCCESS, FETCH_USER_REQUEST, FETCH_USER_FAILURE } from '../constants/index';
import axios from 'axios';
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
export const getUser = () => {
  return dispatch => {
    dispatch(fetch_user_requset())
    axios.get('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=d5025dee4eca4159893374b378307cdc')
      .then(function (response) {
        // handle success
        let a = ~~(Math.random() * 20);
        dispatch(fetch_uesr_success(response.data.articles[a]))
      })
      .catch(function (error) {
        dispatch(fetch_user_failure(error.response.data.message))
        // handle error
      })
  }
}
// 返回对象的函数,因此要执行
export const fetch_uesr_success = (user) => {
  return {
    type: FETCH_USER_SUCCESS,
    user
  }
}
export const fetch_user_requset = () => {
  return {
    type: FETCH_USER_REQUEST
  }
}
export const fetch_user_failure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    error
  }
}
// 注意 暴露的是函数 要执行

