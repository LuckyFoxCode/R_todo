import { DataProps } from 'App';
import clsx from 'clsx';
import { Icon } from 'components/common';
import { FC } from 'react';
import styles from './FolderListItem.module.scss';

interface FolderListItemProps {
  item: DataProps;
}

export const FolderListItem: FC<FolderListItemProps> = ({ item }) => {
  return (
    <li className={clsx(styles.item, item.isSelected ? styles.active : null)}>
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
      />
    </li>
  );
};
