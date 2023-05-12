import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Card } from '../Card';
import { getTickets, setSortedQuantity } from '../../redux/actions';
import { filterTickets, sortTickets } from '../../helpers';

import classes from './CardList.module.scss';

export const CardList = () => {
  const dispatch = useDispatch();
  const { tickets, visibleTickets, filters, tabs } = useSelector((state) => state);

  const sortedTickets = useMemo(() => filterTickets(sortTickets(tickets, tabs), filters), [tickets, filters, tabs]);

  useEffect(() => {
    dispatch(getTickets());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setSortedQuantity(sortedTickets.length));
  }, [dispatch, sortedTickets, filters, tabs]);

  return (
    <ul className={classes['card-list']}>
      {sortedTickets.slice(0, visibleTickets).map((ticketInfo) => (
        <li key={`${ticketInfo.price}${ticketInfo.carrier}${ticketInfo.segments[0].stops}`}>
          <Card ticketInfo={ticketInfo} />
        </li>
      ))}
    </ul>
  );
};
