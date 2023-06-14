import { FC, Fragment, useState } from 'react';
import { CustomButton, CustomInput, Icon } from '..';
import styles from './AddFolder.module.scss';

interface AddFolderProps {
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ColorsDataProps {
  id: string;
  color: string;
  isChecked: boolean;
}

const colorsData: ColorsDataProps[] = [
  { id: 'c1', color: '#C9D1D3', isChecked: true },
  { id: 'c2', color: '#42B883', isChecked: false },
  { id: 'c3', color: '#64C4ED', isChecked: false },
  { id: 'c4', color: '#FFBBCC', isChecked: false },
  { id: 'c5', color: '#B6E6BD', isChecked: false },
  { id: 'c6', color: '#C355F5', isChecked: false },
  { id: 'c7', color: '#09011A', isChecked: false },
  { id: 'c8', color: '#FF6464', isChecked: false },
];

export const AddFolder: FC<AddFolderProps> = ({ setShowPopup }) => {
  const [colorCheck, setColorCheck] = useState<string>('#C9D1D3');

  const closeModal = () => {
    setShowPopup(false);
  };

  return (
    <form className={styles.form}>
      <CustomInput
        placeholder='Название папки'
        onChange={(e) => console.log(e.target.value)}
        className={styles.form__input}
      />
      <div className={styles.form__wrapper}>
        {[] &&
          colorsData.map(({ id, color, isChecked }) => (
            <Fragment key={id}>
              <input
                type='radio'
                name={color}
                id={id}
                checked={isChecked}
              />
              <label
                htmlFor={color}
                className={styles.form__wrapper_color}
                style={{ backgroundColor: color }}
              />
            </Fragment>
          ))}
      </div>
      <CustomButton
        color='green'
        title='Добавить'
      />
      <div
        className={styles.form__close}
        onClick={closeModal}>
        <Icon
          name='plus'
          className={styles.form__close_icon}
        />
      </div>
    </form>
  );
};
