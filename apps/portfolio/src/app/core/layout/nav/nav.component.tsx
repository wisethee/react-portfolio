import { ReactComponent as NavbarLogo } from '../../../../assets/icons/navbar-logo.svg';
import { ReactComponent as NavbarMenu } from '../../../../assets/icons/navbar-menu.svg';
import { ReactComponent as NavbarToggleMode } from '../../../../assets/icons/navbar-toggle-mode.svg';

const AppNav = () => {
  return (
    <nav
      id="app-nav"
      className="px-4 lg:px-8 xl:px-16 h-20 lg:h-24 xl:h-28 flex place-content-between items-center absolute w-full"
    >
      <div className="flex items-center">
        <NavbarLogo />
      </div>
      <div className="flex items-center gap-2 lg:gap-4 2xl:gap-6">
        <NavbarToggleMode />
        <NavbarMenu />
      </div>
    </nav>
  );
};

export default AppNav;
