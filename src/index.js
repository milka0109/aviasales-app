import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './index.scss';
import { App } from './components/App';
import { store } from './redux/store';
import { AviasalesService } from './services/aviasales-service';

const root = ReactDOM.createRoot(document.getElementById('root'));

const aviasalesService = new AviasalesService();

aviasalesService.getSearchId().then(() => {
  aviasalesService.getTickets();
});

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
