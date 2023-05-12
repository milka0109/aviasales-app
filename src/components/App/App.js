import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setVisibleTickets } from '../../redux/actions';
import { Filter } from '../Filter';
import { SortTabs } from '../SortTabs';
import { CardList } from '../CardList';
import { Loader } from '../Loader';
import { Info } from '../Info';

import classes from './App.module.scss';
import logo from './img/logo.png';

export const App = () => {
  const dispatch = useDispatch();
  const { loading, visibleTickets, sortedQuantity } = useSelector((state) => state);
  const areAllVisible = visibleTickets === sortedQuantity;

  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <img className={classes['header--logo']} src={logo} alt="Aviasales logo" />
      </header>
      <main className={classes.main}>
        <Filter />
        <section className={classes.core}>
          <SortTabs />
          {loading ? <Loader /> : null}
          {!sortedQuantity && !loading ? <Info /> : null}
          <div>
            <CardList />
          </div>
          {!areAllVisible && !!sortedQuantity ? (
            <button type="button" className={classes['show-more-btn']} onClick={() => dispatch(setVisibleTickets())}>
              Показать еще 5 билетов!
            </button>
          ) : null}
        </section>
      </main>
    </div>
  );
};
