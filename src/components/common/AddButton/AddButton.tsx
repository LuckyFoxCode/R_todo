import { FC, useState } from 'react';
import { Icon } from '..';

import styles from './AddButton.module.scss';

interface AddButtonProps {
  title: string | null;
}

export const AddButton: FC<AddButtonProps> = ({ title }) => {
  const [add, setAdd] = useState<boolean>(true);

  const addedHandler = () => {
    setAdd((prevState) => !prevState);
    console.log('Added click ');
  };

  return (
    add && (
      <button
        className={styles.button}
        onClick={addedHandler}>
        <Icon
          name='plus'
          className={styles.buttonIcon}
        />
        {title}
      </button>
    )
  );
};
