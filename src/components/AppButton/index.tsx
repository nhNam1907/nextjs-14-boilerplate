import React, { memo } from 'react';
import classNames from 'classnames';
import './index.scss';
import { Button, ButtonProps } from 'antd';

type Props = ButtonProps & {
  children: React.ReactNode;
};

const AppButton = (props: Props) => {
  const { children, className, type = 'primary', size = 'large' } = props;

  return (
    <Button {...props} className={classNames('app-button', className)} type={type} size={size}>
      {children}
    </Button>
  );
};

export default memo(AppButton);
