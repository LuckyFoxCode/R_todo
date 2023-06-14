import { AddButton, AddFolder } from 'components/common';
import { FC, useState } from 'react';

import styles from './Aside.module.scss';

export const Aside: FC = () => {
  const [showPopup, setShowPopup] = useState<boolean>(true);

  return (
    <aside className={styles.aside}>
      {!showPopup && (
        <AddButton
          title='Добавить папку'
          setShowPopup={setShowPopup}
        />
      )}
      {showPopup && <AddFolder setShowPopup={setShowPopup} />}
    </aside>
  );
};
