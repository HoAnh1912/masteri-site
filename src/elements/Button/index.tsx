import { CircularProgress } from '@mui/material';
import React from 'react';
import styles from './Button.module.scss';

interface button {
  onClick?: () => void;
  title: string;
  cate: 'out-line-disable' | 'out-line' | 'standard' | 'standard-light';
  custom?: any;
  isLoading?: boolean;
  disabled?: boolean;
  type?: any;
}

const Button = ({
  onClick,
  title,
  cate,
  custom,
  isLoading,
  disabled,
  type
}: button) => {
  let style = '';
  switch (cate) {
    case 'out-line':
      style = styles.button_outline;
      break;
    case 'standard-light':
      style = styles.button_standard_light;
      break;
    default:
      style = styles.button_standard;
  }

  const renderLoading = () => {
    if (isLoading && cate === 'standard') {
      return <CircularProgress color="inherit" />;
    }
    return title;
  };

  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className={`${style} ${custom} `}
        disabled={disabled}
      >
        {renderLoading()}
      </button>
    </>
  );
};

export default Button;
