import { Skeleton, SkeletonProps } from 'antd';
import classNames from 'classnames';

type Props = SkeletonProps & {
  numberOfSkeletons?: number;
  wrapperClassName?: string;
};

const AppSkeleton = (props: Props) => {
  const { numberOfSkeletons = 3, wrapperClassName } = props;

  return (
    <div className={classNames('app-skeleton', wrapperClassName)}>
      {Array.from({ length: numberOfSkeletons }).map((_, index) => (
        <Skeleton key={index} {...props} />
      ))}
    </div>
  );
};

export default AppSkeleton;
