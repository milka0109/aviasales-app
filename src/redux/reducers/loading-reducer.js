import { SET_LOADING } from '../actions';

export const loadingReducer = (state = true, action) => {
  switch (action.type) {
    case SET_LOADING:
      return action.payload;
    default:
      return state;
  }
};
