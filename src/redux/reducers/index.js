import { combineReducers } from 'redux';

import { filtersReducer } from './filters-reducer';
import { loadingReducer } from './loading-reducer';
import { tabReducer } from './tab-reducer';
import { ticketsReducer } from './tickets-reducer';
import { visibleTicketsReducer } from './visible-tickets-reducer';
import { sortedQuantityReducer } from './sorted-quantity-reducer';

const rootReducer = combineReducers({
  filters: filtersReducer,
  loading: loadingReducer,
  tabs: tabReducer,
  tickets: ticketsReducer,
  visibleTickets: visibleTicketsReducer,
  sortedQuantity: sortedQuantityReducer,
});

export default rootReducer;
