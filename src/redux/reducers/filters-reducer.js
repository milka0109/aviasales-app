import { SET_FILTER } from '../actions';

const initialState = [
  {
    id: 'all',
    checked: true,
    value: 'all',
  },
  {
    id: 'nonStop',
    checked: true,
    value: 0,
  },
  {
    id: 'oneStop',
    checked: true,
    value: 1,
  },
  {
    id: 'twoStops',
    checked: true,
    value: 2,
  },
  {
    id: 'threeStops',
    checked: true,
    value: 3,
  },
];

export const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER: {
      let newState = JSON.parse(JSON.stringify(state));
      const clickedBtn = newState.find((item) => item.id === action.payload).id;

      newState = newState.map((item) => (item.id === clickedBtn ? { ...item, checked: !item.checked } : item));

      const [all, ...otherButtons] = newState;
      const areAllTrue = otherButtons.every((item) => item.checked);

      if (clickedBtn === all.id) {
        newState = newState.map((item) => ({ ...item, checked: all.checked }));
      }

      if (clickedBtn !== all.id && areAllTrue) {
        newState = [{ ...all, checked: true }, ...otherButtons];
      }

      if (clickedBtn !== all.id && !areAllTrue) {
        newState = [{ ...all, checked: false }, ...otherButtons];
      }

      return newState;
    }
    default:
      return state;
  }
};
