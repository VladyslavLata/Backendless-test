import { NavLink } from 'react-router-dom';
import styles from './NavigatePanel.module.css';

export const NavigatePanel = tabs => {
  const sortTabs = tabs.sort(
    (firstTab, secondTab) => firstTab.order - secondTab.order
  );
  const navigatePanel = sortTabs.map(({ id, title }) => {
    return (
      <li key={id} className={styles.item}>
        <NavLink
          className={({ isActive }) => (isActive ? styles.active : '')}
          to={`/${id}`}
        >
          {title}
        </NavLink>
      </li>
    );
  });
  return <ul className={styles.navLinkWrapp}>{navigatePanel}</ul>;
};
