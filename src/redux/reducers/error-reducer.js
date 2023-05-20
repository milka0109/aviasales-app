import { SET_ERROR_STATUS } from '../actions';

const initialState = {
  active: false,
  message: '',
};

export const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR_STATUS:
      return { ...action.payload };
    default:
      return state;
  }
};
