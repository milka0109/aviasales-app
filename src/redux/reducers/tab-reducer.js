import { SET_SORT_TAB } from '../actions';

const initialState = [
  {
    id: 'by-price',
    checked: true,
  },
  {
    id: 'by-speed',
    checked: false,
  },
];
export const tabReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SORT_TAB: {
      const newState = JSON.parse(JSON.stringify(state));
      return newState.map((tab) =>
        tab.id === action.payload ? { ...tab, checked: true } : { ...tab, checked: false }
      );
    }
    default:
      return state;
  }
};
