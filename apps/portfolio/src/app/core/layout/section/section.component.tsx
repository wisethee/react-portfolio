import { ReactNode } from 'react';
import classNames from '../../utils/class-names.utils';

type AppSectionProps = {
  id?: string;
  children: ReactNode;
  height?: 'h-auto' | 'h-full' | 'h-screen';
  direction?: 'flex-row' | 'flex-col';
};

const AppSection = ({ id, children, height, direction }: AppSectionProps) => {
  const padding = 'p-4 lg:p-8 lg:p-16';

  return (
    <section id={id} className={classNames(height, padding, 'flex', direction)}>
      {children}
    </section>
  );
};

AppSection.defaultProps = {
  height: 'h-auto',
  direction: 'flex-row',
};

export default AppSection;
