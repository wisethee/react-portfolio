import { Fragment } from 'react';
import AppHero from '../core/layout/hero/hero.component';
import AppNav from '../core/layout/nav/nav.component';

const AppHome = () => {
  return (
    <Fragment>
      <AppNav />
      <AppHero />
    </Fragment>
  );
};

export default AppHome;
