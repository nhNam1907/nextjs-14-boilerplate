import { SelectOption } from '@/types/common';
import { getFormItemLayout, validateTrigger } from '@/utils/form';
import { Radio, RadioGroupProps } from 'antd';
import Form, { Rule } from 'antd/es/form';
import { FormItemLayout } from 'antd/es/form/Form';
import classNames from 'classnames';
import React from 'react';

type Props = RadioGroupProps & {
  options: Array<SelectOption>;
  label: string;
  name: string;
  required?: boolean;
  rules?: Array<Rule>;
  layout?: FormItemLayout;
  wrapperClassName?: string;
};

function AppRadio(props: Props) {
  const { className, options, label, name, required, rules, layout = 'vertical', wrapperClassName } = props;

  return (
    <div className={classNames('app-radio', wrapperClassName)}>
      <Form.Item
        {...getFormItemLayout(layout)}
        required={required}
        name={name}
        label={label}
        rules={rules}
        layout={layout}
        validateTrigger={validateTrigger}
      >
        <Radio.Group {...props} className={className} options={options} />
      </Form.Item>
    </div>
  );
}

export default AppRadio;
