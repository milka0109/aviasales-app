import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { add, format, parseISO } from 'date-fns';

import classes from './Route.module.scss';

export const Route = ({ info }) => {
  const { origin, destination, date, duration, stops } = info;
  let stopsTitle;
  switch (stops.length) {
    case 0:
      stopsTitle = 'Без пересадок';
      break;
    case 1:
      stopsTitle = ' 1 пересадка';
      break;
    default:
      stopsTitle = `${stops.length} пересадки`;
  }
  const stopsInfo = stops.join(', ');

  const getDepartureDate = (fullDate) => format(parseISO(fullDate), 'hh:mm');

  const getDestinationDate = (fullDate, final) =>
    format(add(parseISO(fullDate), { hours: Math.trunc(duration / 60), minutes: final % 60 }), 'hh:mm');

  const getFormatTime = (time) => {
    const hours = Math.trunc(time / 60);
    const minutes = time % 60;
    return minutes > 0 ? `${hours} ч. ${minutes} мин.` : `${hours} ч.`;
  };

  return (
    <div className={classes.route}>
      <div className={classes['route--flight']}>
        <div className={cn(classes.text, classes.title)}>
          {origin} – {destination}
        </div>
        <div className={classes.text}>
          {getDepartureDate(date)} - {getDestinationDate(date, duration)}
        </div>
      </div>
      <div className={classes['route--time']}>
        <div className={cn(classes.text, classes.title)}>В пути</div>
        <div className={classes.text}>{getFormatTime(duration)}</div>
      </div>
      <div className={classes['route--stops']}>
        <div className={cn(classes.text, classes.title)}>{stopsTitle}</div>
        <div className={classes.text}>{stopsInfo}</div>
      </div>
    </div>
  );
};

Route.defaultProps = {
  origin: '',
  destination: '',
  date: '',
  duration: 0,
  stops: [],
};

Route.propTypes = {
  origin: PropTypes.string,
  destination: PropTypes.string,
  date: PropTypes.string,
  duration: PropTypes.number,
  stops: PropTypes.arrayOf(PropTypes.string),
};
