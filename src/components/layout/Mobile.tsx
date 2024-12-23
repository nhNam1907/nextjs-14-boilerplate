import { BREAKPOINT } from '@/types/common';
import { useMediaQuery } from 'react-responsive';

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: BREAKPOINT.lg - 1 });

  return <div className='app-mobile w-full'>{isMobile && children}</div>;
};

export default Mobile;
