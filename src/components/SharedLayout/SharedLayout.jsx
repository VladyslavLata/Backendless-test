import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { NavigatePanel } from '../NavigatePanel/NavigatePanel';
import styles from './SharedLayout.module.css';

export const SharedLayout = ({ tabs }) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <nav className={styles.nav}>
            <p className={styles.logo}>Backendless</p>
            {NavigatePanel(tabs)}
          </nav>
        </div>
      </header>
      <main>
        <section>
          <div className={styles.container}>
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
          </div>
        </section>
      </main>
    </>
  );
};
