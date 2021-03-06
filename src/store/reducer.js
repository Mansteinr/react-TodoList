// reducer 存储所有的数据 可以理解为reducer是个仓库
// store是个管理员 通过store管理reducer里的所有数据
// action是组件改变store里面的数据时 组件和store之间的通信
import * as types from './actionTypes'

const defaultStore = {
  inputValue: '',
  list: []
}

// reducer可以接收state，但是绝不能修改state
export default (state = defaultStore, action) => {
  if(action.type === types.CHANGE_INPUT_VALUE) {
    // 将之前的state深度拷贝一份
    const newState = JSON.parse(JSON.stringify(state))
    // 改变
    newState.inputValue = action.value
    // 将改变后的newState返回出去 返回给store了 
    // 然后store里面相应的数据就会自动变化
    return newState
  }
  if(action.type === types.ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }
  if(action.type === types.DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index, 1)
    return newState
  }
  if(action.type === types.INIT_LIST_ACTION) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list = action.data.slice(0, 10)
    return newState
  }
  return state
}