import { Route } from 'react-router-dom';

export const RouteCreator = (routesData, pages) => {
  return routesData.map(({ id }) => {
    const indexCurrentEl = pages.findIndex(({ titleEl }) => titleEl === id);
    const Page = pages[indexCurrentEl].el;
    return <Route key={id} path={id} element={<Page />} />;
  });
};
