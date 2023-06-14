import { FC } from 'react';
import { Icon } from '..';

import styles from './AddButton.module.scss';

interface AddButtonProps {
  title: string | null;
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AddButton: FC<AddButtonProps> = ({ title, setShowPopup }) => {
  const addedHandler = () => {
    setShowPopup(true);
  };

  return (
    <button
      className={styles.button}
      onClick={addedHandler}>
      <Icon
        name='plus'
        className={styles.buttonIcon}
      />
      {title}
    </button>
  );
};
