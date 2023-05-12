import { AviasalesService } from '../../services/aviasales-service';

export const SET_FILTER = 'SET_FILTERS';
export const GET_TICKETS = 'GET_TICKETS';
export const SET_VISIBLE_TICKETS = 'SHOW_MORE_TICKETS';
export const SET_SORT_TAB = 'SET_SORT_TAB';
export const SET_LOADING = 'SET_LOADING';
export const SET_SORTED_QUANTITY = 'SET_VISIBLE_QUANTITY';

export const setFilter = (stopsId) => ({ type: SET_FILTER, payload: stopsId });
export const setVisibleTickets = () => ({ type: SET_VISIBLE_TICKETS });
export const setSortTab = (tabId) => ({ type: SET_SORT_TAB, payload: tabId });
export const setSortedQuantity = (quantity) => ({ type: SET_SORTED_QUANTITY, payload: quantity });

const aviasalesService = new AviasalesService();

export const getTickets = () => async (dispatch) => {
  try {
    if (aviasalesService._searchId === null) {
      await aviasalesService.getSearchId();
    }
    const res = await aviasalesService.getTickets();
    const { tickets, stop } = res;
    await dispatch({ type: GET_TICKETS, payload: tickets });
    if (stop) {
      dispatch({ type: SET_LOADING, payload: false });
    }
    if (!stop) {
      dispatch(getTickets());
    }
  } catch (e) {
    if (e.message === 'Код ошибки 500') {
      dispatch(getTickets());
    } else {
      throw new Error(e);
    }
  }
};
