import { Typography } from '@mui/material';
import React from 'react';
import styles from './Error.module.scss';
interface Error {
  message: any;
  custom?: any;
  type: 'success' | 'error';
}
const ErrorMessage = ({ message, custom, type }: Error) => {
  return (
    <>
      {type === 'success' ? (
        <Typography className={`${custom} ${styles.success_message}`}>
          {message}
        </Typography>
      ) : (
        <Typography className={`${custom} ${styles.error_message}`}>
          {message}
        </Typography>
      )}
    </>
  );
};

export default ErrorMessage;
