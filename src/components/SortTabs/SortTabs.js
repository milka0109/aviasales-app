import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';

import { setSortTab } from '../../redux/actions';

import classes from './SortTabs.module.scss';

export const SortTabs = () => {
  const dispatch = useDispatch();
  const tabs = useSelector((state) => state.tabs);
  const [byPrice, bySpeed] = tabs;
  return (
    <div className={classes['sort-tabs']}>
      <button
        type="button"
        className={cn([classes['sort-tabs--button']], { [classes['sort-tabs--button__checked']]: byPrice.checked })}
        onClick={() => dispatch(setSortTab(byPrice.id))}
      >
        Самый дешевый
      </button>
      <button
        type="button"
        className={cn([classes['sort-tabs--button']], { [classes['sort-tabs--button__checked']]: bySpeed.checked })}
        onClick={() => dispatch(setSortTab(bySpeed.id))}
      >
        Самый быстрый
      </button>
    </div>
  );
};
