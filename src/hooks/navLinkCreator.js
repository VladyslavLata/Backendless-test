import { NavLink } from 'react-router-dom';

export const navLinkCreator = tabs => {
  const sortTabs = tabs.sort(
    (firstTab, secondTab) => firstTab.order - secondTab.order
  );
  console.log(sortTabs);
  return sortTabs.map(({ id, title }) => {
    return (
      <NavLink key={id} to={`/${id}`}>
        {title}
      </NavLink>
    );
  });
};
