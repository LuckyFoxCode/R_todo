import clsx from 'clsx';
import { AddButton } from 'components/common';
import { FC } from 'react';

import styles from './Aside.module.scss';

interface AsideProps {
  show: boolean;
  onClick: () => void;
}

export const Aside: FC<AsideProps> = ({ show, onClick }) => {
  return (
    <aside className={clsx(styles.aside, show ? styles.show : null)}>
      <button
        className={styles.asideBar}
        onClick={onClick}>
        ⬅️
      </button>
      <AddButton title={show ? 'Добавить папку' : null} />
    </aside>
  );
};
