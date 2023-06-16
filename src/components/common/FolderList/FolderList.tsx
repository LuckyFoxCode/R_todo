import { DataProps } from 'App';
import { FC } from 'react';
import styles from './FolderList.module.scss';
import { FolderListItem } from './components/FolderListItem';

interface FolderListProps {
  data: DataProps[];
}

export const FolderList: FC<FolderListProps> = ({ data }) => {
  return (
    <ul className={styles.list}>
      {[] &&
        data.map((item) => (
          <FolderListItem
            key={item.id}
            item={item}
          />
        ))}
    </ul>
  );
};
