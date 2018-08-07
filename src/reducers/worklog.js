import * as TYPE from '../actions/worklog/types';

const initialState = {
  loading: false,    
  worklogs: []
}

export default function worklogReducer(state = initialState, action) {
  switch (action.type) {
    case TYPE.WORKLOG_LOADING:
      return Object.assign({}, state, {
        loading: true,
    })
    case TYPE.WORKLOG_LOADED:
      return Object.assign({}, state, {
        loading: false,
        worklogs: action.worklogs,
      })
    case TYPE.WORKLOG_ERROR:
      return Object.assign({}, state, {
        loading: false,
        worklogs: [],
      })
    default:
      return state;
  }    
};