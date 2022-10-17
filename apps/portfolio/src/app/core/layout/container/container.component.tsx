import { ReactNode } from 'react';
import classNames from '../../utils/class-names.utils';

type AppContainerProps = {
  children: ReactNode;
  direction?: 'flex-row' | 'flex-col';
};

const AppContainer = ({ children, direction }: AppContainerProps) => {
  return (
    <div className={classNames('container m-auto flex', direction)}>
      {children}
    </div>
  );
};

AppContainer.defaultProps = {
  direction: 'flex-row',
};

export default AppContainer;
