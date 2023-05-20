import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from 'antd';

import { setVisibleTickets } from '../../redux/actions';
import { Filter } from '../Filter';
import { SortTabs } from '../SortTabs';
import { CardList } from '../CardList';
import { Loader } from '../Loader';
import logo from '../../assets/img/logo.png';

import classes from './App.module.scss';

export const App = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state);

  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <img className={classes['header--logo']} src={logo} alt="Aviasales logo" />
      </header>
      <main className={classes.main}>
        <Filter />
        <section className={classes.core}>
          <SortTabs />
          {loading && !error.active ? <Loader /> : null}
          {error.active ? (
            <Alert
              message="Error:"
              description={error.message}
              type="error"
              showIcon
              className={classes['alert-error']}
            />
          ) : (
            <div>
              <CardList />
            </div>
          )}
          <button type="button" className={classes['show-more-btn']} onClick={() => dispatch(setVisibleTickets())}>
            Показать еще 5 билетов!
          </button>
        </section>
      </main>
    </div>
  );
};
