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
  const { id, color, title, isSelected } = item;

  return (
    <li
      className={clsx(styles.item, isSelected ? styles.active : null)}
      onClick={() => handleActiveFolder(id)}>
      <div
        className={styles.item__color}
        style={{ backgroundColor: color }}
      />

      <div className={styles.item__wrapper}>
        {title}

        <Icon
          name='plus'
          className={styles.item__wrapper_icon}
          onClick={() => handleDeleteFolder(id)}
        />
      </div>
    </li>
  );
};
