import {ADD_NOTE, DELETE_NOTE} from '../actions/types';

const initialState = {
  noteList: [],
};

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        noteList: state.noteList.concat({
          key: Math.random(),
          name: action.data,
        }),
      };
    case DELETE_NOTE:
      return {
        ...state,
        noteList: state.noteList.filter(item => item.key !== action.key),
      };
    default:
      return state;
  }
};

export default noteReducer;
