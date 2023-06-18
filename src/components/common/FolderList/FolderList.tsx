import { DataProps } from 'App';
import { Dispatch, FC, SetStateAction } from 'react';
import styles from './FolderList.module.scss';
import { FolderListItem } from './components/FolderListItem';

interface FolderListProps {
  data: DataProps[];
  setData: Dispatch<SetStateAction<DataProps[]>>;
}

export const FolderList: FC<FolderListProps> = ({ data, setData }) => {
  const handleActiveFolder = (id: string) => {
    const updateData = data.map((item) => {
      if (item.id === id) {
        return { ...item, isSelected: true };
      } else {
        return { ...item, isSelected: false };
      }
    });

    setData(updateData);
  };

  const handleDeleteFolder = (id: string) => {
    const updateData = data.filter((folder) => folder.id !== id);

    setData(updateData);
  };

  return (
    <ul className={styles.list}>
      {[] &&
        data.map((item) => (
          <FolderListItem
            key={item.id}
            item={item}
            handleActiveFolder={handleActiveFolder}
            handleDeleteFolder={handleDeleteFolder}
          />
        ))}
    </ul>
  );
};
