import { getFormItemLayout, validateTrigger } from '@/utils/form';
import { Form, Input } from 'antd';
import type { InputProps } from 'antd';
import { Rule } from 'antd/es/form';
import { FormItemLayout } from 'antd/es/form/Form';
import classNames from 'classnames';
import './index.scss';

type Props = InputProps & {
  label: string;
  name: string;
  required?: boolean;
  rules?: Array<Rule>;
  layout?: FormItemLayout;
  wrapperClassName?: string;
};

const AppInput = (props: Props) => {
  const { className, label, name, required, rules, layout = 'vertical', wrapperClassName } = props;

  return (
    <div className={classNames('app-input w-full', wrapperClassName)}>
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
        <Input {...props} size='large' />
      </Form.Item>
    </div>
  );
};

export default AppInput;
