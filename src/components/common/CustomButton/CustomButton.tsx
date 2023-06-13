import clsx from 'clsx';
import { FC } from 'react';
import styles from './CustomButton.module.scss';

interface CustomButtonProps {
  color: colors;
  title: string;
  className?: string;
  onClick?: () => void;
}

type colors = 'green' | 'gray';

export const CustomButton: FC<CustomButtonProps> = ({ color, title, className, onClick }) => {
  return (
    <button
      className={clsx(styles.customBtn, styles[color], className)}
      onClick={onClick}>
      {title}
    </button>
  );
};
