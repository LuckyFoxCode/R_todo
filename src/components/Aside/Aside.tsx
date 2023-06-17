import { AddButton, AddFolder, FolderList, Icon } from 'components/common';
import { Dispatch, FC, SetStateAction, useState } from 'react';

import { DataProps } from 'App';
import styles from './Aside.module.scss';

interface AsideProps {
  data: DataProps[];
  setData: Dispatch<SetStateAction<DataProps[]>>;
}

export const Aside: FC<AsideProps> = ({ data, setData }) => {
  const [showPopup, setShowPopup] = useState<boolean>(false);

  return (
    <aside className={styles.aside}>
      {!!data.length && (
        <button className={styles.aside__allBtn}>
          <Icon
            name='all'
            className={styles.aside__allBtn_icon}
          />
          Все задачи
        </button>
      )}
      {!!data.length && (
        <FolderList
          data={data}
          setData={setData}
        />
      )}
      {!showPopup && (
        <AddButton
          title='Добавить папку'
          setShowPopup={setShowPopup}
        />
      )}

      {showPopup && (
        <AddFolder
          setData={setData}
          setShowPopup={setShowPopup}
        />
      )}
    </aside>
  );
};
