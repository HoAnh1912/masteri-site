import {
  Box,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select
} from '@mui/material';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import TriangleBoxIcon from 'assets/icons/triangle-box';
import TriangleBoxUpIcon from 'assets/icons/triangle-box-up';
import styles from './Input.module.scss';

interface select {
  value: string;
  title: string;
}
interface input {
  label: string;
  control: any;
  name: string;
  items: Array<select>;
}

const SelectCustom = ({ label, control, name, items }: input) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Box className={styles.select_wrapper}>
      <InputLabel htmlFor={name} className={styles.label}>
        {label}
      </InputLabel>
      <Box className={styles.container}>
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, value } }) => (
            <Select
              value={value}
              onChange={onChange}
              displayEmpty
              fullWidth
              className={styles.input}
              MenuProps={{
                style: {
                  maxHeight: 200
                }
              }}
              IconComponent={() =>
                isOpen ? <TriangleBoxUpIcon /> : <TriangleBoxIcon />
              }
              onOpen={() => {
                setIsOpen(true);
              }}
              onClose={() => {
                setIsOpen(false);
              }}
            >
              <MenuItem value="">출원인을 입력해 주세요</MenuItem>
              {items?.map((x, i) => (
                <MenuItem value={x.value} key={i}>
                  {x.title}
                </MenuItem>
              ))}
            </Select>
          )}
        />
      </Box>
    </Box>
  );
};

export default SelectCustom;
