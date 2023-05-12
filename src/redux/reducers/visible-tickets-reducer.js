import { SET_VISIBLE_TICKETS } from '../actions';

export const visibleTicketsReducer = (state = 5, action) => {
  switch (action.type) {
    case SET_VISIBLE_TICKETS:
      return state + 5;
    default:
      return state;
  }
};
