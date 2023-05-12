import React from 'react';
import { Alert } from 'antd';

import classes from './Info.module.scss';

export const Info = () => (
  <div className={classes.information}>
    <Alert
      style={{ padding: '20px' }}
      message="Рейсов, подходящих под заданные фильтры, не найдено"
      type="info"
      showIcon
    />
  </div>
);
