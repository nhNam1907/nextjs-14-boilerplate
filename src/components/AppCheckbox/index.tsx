import { SelectOption } from '@/types/common';
import { getFormItemLayout, validateTrigger } from '@/utils/form';
import Checkbox, { CheckboxGroupProps } from 'antd/es/checkbox';
import Form, { Rule } from 'antd/es/form';
import { FormItemLayout } from 'antd/es/form/Form';
import classNames from 'classnames';
import React from 'react';

type Props = CheckboxGroupProps & {
  options: Array<SelectOption>;
  label: string;
  name: string;
  required?: boolean;
  rules?: Array<Rule>;
  layout?: FormItemLayout;
  wrapperClassName?: string;
};

function AppCheckbox(props: Props) {
  const { className, options, label, name, required, rules, layout = 'vertical', wrapperClassName } = props;

  return (
    <div className={classNames('app-checkbox', wrapperClassName)}>
      <Form.Item
        {...getFormItemLayout(layout)}
        className={className}
        required={required}
        name={name}
        label={label}
        rules={rules}
        layout={layout}
        validateTrigger={validateTrigger}
      >
        <Checkbox.Group {...props} options={options} />
      </Form.Item>
    </div>
  );
}

export default AppCheckbox;
