import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './breadcumb.module.css'

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  return (
    <nav className={styles.breadcrumbs}>
      <ul className={styles.lista}>
        <li >
          <Link to="/">Home &gt;</Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={to}>
              {isLast ? (
                <span> {value} &gt; </span>
              ) : (
                <Link to={to}>{value}</Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
