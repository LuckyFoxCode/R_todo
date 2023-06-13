import { FC } from 'react';
import { CustomButton, CustomInput } from '..';
import styles from './AddTask.module.scss';

export const AddTask: FC = () => {
  const getTaskValue = () => {
    console.log('getTaskValue');
  };

  return (
    <form className={styles.form}>
      <CustomInput
        placeholder='Текст задачи'
        onChange={getTaskValue}
        className={styles.form__input}
      />
      <div>
        <CustomButton
          title='Добавить задачу'
          color='green'
          className={styles.form__addButton}
        />
        <CustomButton
          title='Отмена'
          color='gray'
        />
      </div>
    </form>
  );
};
