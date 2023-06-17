import { DataProps } from 'App';
import clsx from 'clsx';
import { Icon } from 'components/common';
import { FC } from 'react';
import styles from './FolderListItem.module.scss';

interface FolderListItemProps {
  item: DataProps;
  handleActiveFolder: (id: string) => void;
  handleDeleteFolder: (id: string) => void;
}

export const FolderListItem: FC<FolderListItemProps> = ({
  item,
  handleActiveFolder,
  handleDeleteFolder,
}) => {
  return (
    <li
      className={clsx(styles.item, item.isSelected ? styles.active : null)}
      onClick={() => handleActiveFolder(item.id)}>
      <div className={styles.item__wrapper}>
        <div
          className={styles.item__color}
          style={{ backgroundColor: item.color }}
        />
        {item.title}
      </div>
      <Icon
        name='plus'
        className={styles.item__icon}
        onClick={() => handleDeleteFolder(item.id)}
        id={item.id}
      />
    </li>
  );
};
