import {ADD_NOTE, DELETE_NOTE} from './types';

export const addNote = note => ({
  type: ADD_NOTE,
  data: note,
});

export const deleteNote = key => ({
  type: DELETE_NOTE,
  key: key,
});
