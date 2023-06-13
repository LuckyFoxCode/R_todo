import { AddButton } from 'components/common';
import { FC } from 'react';

import styles from './Aside.module.scss';

export const Aside: FC = () => {
  return (
    <aside className={styles.aside}>
      <AddButton title='Добавить папку' />
    </aside>
  );
};
