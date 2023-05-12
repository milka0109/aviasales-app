import React from 'react';
import PropTypes from 'prop-types';

import { Route } from '../Route';

import classes from './Card.module.scss';

export const Card = ({ ticketInfo }) => {
  const { price, segments } = ticketInfo;

  const getPrice = (number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

  return (
    <div className={classes.card}>
      <div className={classes['card--header']}>
        <span className={classes['card--price']}>{getPrice(price)} Р </span>
        <img className={classes['card--airline']} src={`//pics.avs.io/99/36/${ticketInfo.carrier}.png`} alt="airline" />
      </div>
      {/* Прямой рейс */}
      <Route info={segments[0]} />
      {/* Обратный рейс */}
      <Route info={segments[1]} />
    </div>
  );
};

Card.defaultProps = {
  ticketInfo: {
    carrier: '',
    price: 0,
    segments: [
      {
        origin: '',
        destination: '',
        date: '',
        duration: 0,
        stops: [],
      },
      {
        origin: '',
        destination: '',
        date: '',
        duration: 0,
        stops: [],
      },
    ],
  },
};

Card.propTypes = {
  ticketInfo: PropTypes.shape({
    carrier: PropTypes.string,
    price: PropTypes.number,
    segments: PropTypes.arrayOf(
      PropTypes.shape({
        origin: PropTypes.string,
        destination: PropTypes.string,
        date: PropTypes.string,
        duration: PropTypes.number,
        stops: PropTypes.arrayOf(PropTypes.string),
      })
    ),
  }),
};
