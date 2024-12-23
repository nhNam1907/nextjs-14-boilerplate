import { Table, TableProps } from 'antd';
import classNames from 'classnames';
import { memo } from 'react';

type Props = TableProps & {
  wrapperClassName?: string;
};

const AppTable = (props: Props) => {
  const { className, columns, dataSource, wrapperClassName } = props;

  return (
    <div className={classNames('app-table', wrapperClassName)}>
      <Table {...props} className={className} columns={columns} dataSource={dataSource} bordered />
    </div>
  );
};

export default memo(AppTable);
