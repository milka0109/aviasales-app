import { SET_SORTED_QUANTITY } from '../actions';

export const sortedQuantityReducer = (state = 0, action) => {
  switch (action.type) {
    case SET_SORTED_QUANTITY:
      return action.payload;
    default:
      return state;
  }
};
