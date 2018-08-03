import * as TYPE from '../actions/user/types';

const initialState = {
  loading: false,    
  user: {},
  logIn: false
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case TYPE.USER_LOGIN:
      return Object.assign({}, state, {
        loading: true,
    })
    case TYPE.USER_LOGGED:
      return Object.assign({}, state, {
        loading: false,
        logIn: true,
        user: action.user,
      })
    case TYPE.USER_LOGOUT:
      return Object.assign({}, state, {
        loading: false,
        logIn: false,
        user: {}
      })
    case TYPE.USER_ERROR:
      return Object.assign({}, state, {
        loading: false,
        logIn: false,
        user: {}
      })
    default:
      return state;
  }
}