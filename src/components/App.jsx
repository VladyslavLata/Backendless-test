import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { lazy, useState, useEffect } from 'react';
import { SharedLayout } from './SharedLayout/SharedLayout';

import { getTabs } from 'API/fakeAPI';
import { RouteCreator } from 'hooks/routeCreator';

const pages = [
  { el: lazy(() => import('pages/DummyChart')), titleEl: 'dummyChart' },
  { el: lazy(() => import('pages/DummyList')), titleEl: 'dummyList' },
  { el: lazy(() => import('pages/DummyTable')), titleEl: 'dummyTable' },
];

export const App = () => {
  const [tabs, setTabs] = useState(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const getAllTabs = () => {
      try {
        const allTabs = getTabs();
        setTabs(allTabs);
      } catch (error) {
        console.log(error.message);
      }
    };

    getAllTabs();
  }, []);

  useEffect(() => {
    if (!tabs || pathname !== '/') {
      return;
    }
    const findMainRoute = tabs.find(({ order }) => order === 0);
    navigate(`/${findMainRoute.id}`, { replace: true });
  }, [navigate, pathname, tabs]);

  return tabs ? (
    <Routes>
      <Route path="/" element={<SharedLayout tabs={tabs} />}>
        {RouteCreator(tabs, pages)}
      </Route>
    </Routes>
  ) : (
    <p>LOADING...</p>
  );
};
