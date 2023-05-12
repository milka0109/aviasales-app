import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setFilter } from '../../redux/actions';

import classes from './Filter.module.scss';

export const Filter = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);
  const [all, nonStop, oneStop, twoStops, threeStops] = filters;

  return (
    <form className={classes.filter}>
      <h2 className={classes['filter--header']}>Количество пересадок</h2>
      <label htmlFor="all" className={classes['filter--option']}>
        <input
          onChange={() => dispatch(setFilter(all.id))}
          className={classes['filter--input']}
          type="checkbox"
          id="all"
          checked={all.checked}
        />
        <div className={classes['filter--box']} />
        <span className={classes['filter--text']}>Все</span>
        <br />
      </label>
      <label htmlFor="nonStop" className={classes['filter--option']}>
        <input
          onChange={() => dispatch(setFilter(nonStop.id))}
          className={classes['filter--input']}
          type="checkbox"
          id="nonStop"
          checked={nonStop.checked}
        />
        <div className={classes['filter--box']} />
        <span className={classes['filter--text']}>Без пересадок</span>
        <br />
      </label>
      <label htmlFor="oneStop" className={classes['filter--option']}>
        <input
          onChange={() => dispatch(setFilter(oneStop.id))}
          className={classes['filter--input']}
          type="checkbox"
          id="oneStop"
          checked={oneStop.checked}
        />
        <div className={classes['filter--box']} />
        <span className={classes['filter--text']}>1 пересадка</span>
        <br />
      </label>
      <label htmlFor="twoStops" className={classes['filter--option']}>
        <input
          onChange={() => dispatch(setFilter(twoStops.id))}
          className={classes['filter--input']}
          type="checkbox"
          id="twoStops"
          checked={twoStops.checked}
        />
        <div className={classes['filter--box']} />
        <span className={classes['filter--text']}>2 пересадки</span>
        <br />
      </label>
      <label htmlFor="threeStops" className={classes['filter--option']}>
        <input
          onChange={() => dispatch(setFilter(threeStops.id))}
          className={classes['filter--input']}
          type="checkbox"
          id="threeStops"
          checked={threeStops.checked}
        />
        <div className={classes['filter--box']} />
        <span className={classes['filter--text']}>3 пересадки</span>
        <br />
      </label>
    </form>
  );
};
