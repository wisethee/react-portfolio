import { Fragment } from 'react';
import { ReactComponent as NavbarLogo } from '../../assets/icons/navbar-logo.svg';
import { ReactComponent as NavbarMenu } from '../../assets/icons/navbar-menu.svg';
import { ReactComponent as NavbarToggleMode } from '../../assets/icons/navbar-toggle-mode.svg';

const AppHome = () => {
  return (
    <Fragment>
      <nav
        id="app-nav"
        className="px-4 lg:px-8 2xl:px-16 h-20 lg:h-24 2xl:h-28 flex place-content-between items-center absolute w-full"
      >
        <div className="flex items-center">
          <NavbarLogo />
        </div>
        <div className="flex items-center gap-2 lg:gap-4 2xl:gap-6">
          <NavbarToggleMode />
          <NavbarMenu />
        </div>
      </nav>

      <section
        id="app-hero"
        className="h-screen px-4 lg:px-8 2xl:px-16 lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl m-auto flex items-center"
      >
        <div className="w-full md:w-1/2">
          <h1 className="mb-6 text-display-small md:text-display-medium lg:text-display-large text-light-on-surface">
            Hello, <br />
            I'm&nbsp;
            <span className="bg-gradient-to-tr from-light-primary to-light-secondary bg-clip-text text-transparent">
              Marius
            </span>
          </h1>
          <h6 className="mb-12 text-title-medium md:text-title-large lg:text-headline-small text-light-on-surface">
            Junior Web Developer
          </h6>
          <p className="text-body-small md:text-body-medium lg:text-body-large text-light-on-surface-variant">
            I enjoy coding simple things, study, test, try and challenge myself
            in finding the best way possible to complete the challenges.
          </p>
        </div>
      </section>
    </Fragment>
  );
};

export default AppHome;
