import { BREAKPOINT } from '@/types/common';
import { useMediaQuery } from 'react-responsive';

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: BREAKPOINT.lg });

  return <div className='app-desktop w-full'>{isDesktop && children}</div>;
};

export default Desktop;
