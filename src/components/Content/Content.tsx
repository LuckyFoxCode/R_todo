import { AddTask } from 'components/common';
import styles from './Content.module.scss';

export const Content = () => {
  return (
    <main className={styles.content}>
      <AddTask />
    </main>
  );
};
