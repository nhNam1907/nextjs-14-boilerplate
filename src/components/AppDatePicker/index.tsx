import React from 'react';
import { DatePicker, type DatePickerProps } from 'antd';
import classNames from 'classnames';
import Form, { Rule } from 'antd/es/form';
import { FormItemLayout } from 'antd/es/form/Form';
import { getFormItemLayout, validateTrigger } from '@/utils/form';
import './index.scss';

type Props = DatePickerProps & {
  label: string;
  name: string;
  required?: boolean;
  rules?: Array<Rule>;
  layout?: FormItemLayout;
  wrapperClassName?: string;
};

function AppDatePicker(props: Props) {
  const { className, label, name, required, rules, layout = 'vertical', wrapperClassName } = props;

  return (
    <div className={classNames('app-datepicker w-full', wrapperClassName)}>
      <Form.Item
        {...getFormItemLayout(layout)}
        required={required}
        name={name}
        label={label}
        rules={rules}
        layout={layout}
        validateTrigger={validateTrigger}
        className={className}
      >
        <DatePicker {...props} size='large' />
      </Form.Item>
    </div>
  );
}

export default AppDatePicker;
