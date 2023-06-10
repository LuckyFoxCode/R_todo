import clsx from 'clsx';
import { FC } from 'react';

interface IconProps {
  name: IconName;
  className?: string;
}

type IconName = 'all' | 'plus' | 'checked';

export const Icon: FC<IconProps> = ({ name, className }) => {
  switch (name) {
    case 'plus':
      return (
        <svg
          className={clsx(className)}
          viewBox='0 0 12 12'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M6 1V11'
            stroke='#868686'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M1 6H11'
            stroke='#868686'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      );
    default:
      return null;
  }
};
