import { GET_TICKETS } from '../actions';

const initialState = [];

export const ticketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TICKETS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};
