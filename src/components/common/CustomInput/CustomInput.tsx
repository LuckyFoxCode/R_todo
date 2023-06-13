import clsx from 'clsx';
import { ChangeEvent, FC } from 'react';

import styles from './CustomInput.module.scss';

interface CustomInputProps {
  className?: string;
  placeholder: string;
  onChange: (value: ChangeEvent<HTMLInputElement>) => void;
}

export const CustomInput: FC<CustomInputProps> = ({ placeholder, className, onChange }) => {
  return (
    <input
      type='text'
      placeholder={placeholder}
      className={clsx(styles.input, className)}
      onChange={onChange}
    />
  );
};
