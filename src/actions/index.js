import { INCREMENT, DECREMENT, FETCH_USER_SUCCESS } from '../constants/index';
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
    axios.get('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=d5025dee4eca4159893374b378307cdc')
      .then(function (response) {
        // handle success
        console.log(response);
        let a=~~(Math.random()*20);
        dispatch(fetchUser(response.data.articles[a]))
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }
}
export const fetchUser = (user) => {
  return {
    type: FETCH_USER_SUCCESS,
    user
  }
}
// 注意 暴露的是函数 要执行

