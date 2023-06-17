import { DataProps } from 'App';
import { ChangeEvent, Dispatch, FC, FormEvent, Fragment, SetStateAction, useState } from 'react';
import { uid } from 'uid';
import { CustomButton, CustomInput, Icon } from '..';
import styles from './AddFolder.module.scss';

interface AddFolderProps {
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
  setData: Dispatch<SetStateAction<DataProps[]>>;
}

interface ColorsDataProps {
  id: string;
  color: string;
}

const colorsData: ColorsDataProps[] = [
  { id: 'c1', color: '#C9D1D3' },
  { id: 'c2', color: '#42B883' },
  { id: 'c3', color: '#64C4ED' },
  { id: 'c4', color: '#FFBBCC' },
  { id: 'c5', color: '#B6E6BD' },
  { id: 'c6', color: '#C355F5' },
  { id: 'c7', color: '#09011A' },
  { id: 'c8', color: '#FF6464' },
];

export const AddFolder: FC<AddFolderProps> = ({ setShowPopup, setData }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [colorChecked, setColorChecked] = useState<string>('#C9D1D3');

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    const data: DataProps = {
      id: uid(),
      title: inputValue,
      color: colorChecked,
      isSelected: false,
    };

    setData((preveState) => [...preveState, data]);
    setInputValue('');
    setShowPopup(false);
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleFormSubmit}>
      <CustomInput
        placeholder='Название папки'
        onChange={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
        className={styles.form__input}
      />
      <div className={styles.form__wrapper}>
        {[] &&
          colorsData.map(({ id, color }) => (
            <Fragment key={id}>
              <input
                type='radio'
                id={color}
                value={color}
                checked={colorChecked === color}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setColorChecked(e.target.value)}
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
        onClick={() => setShowPopup(false)}>
        <Icon
          name='plus'
          className={styles.form__close_icon}
        />
      </div>
    </form>
  );
};
