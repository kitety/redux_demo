// 两个参数 前面是改变值,后面是传进来的值
const counter = (state = 1, action = {}) => {
  switch (action.type) {
    case 'INCREMENT':
    console.log(action.name);
      return state + 1;
    case 'DECREMENT':
      console.log(action.name);
      return state - 1;
    default: return state
  }
}
export default counter;
