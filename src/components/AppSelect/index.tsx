import { SelectOption } from '@/types/common';
import { getFormItemLayout, validateTrigger } from '@/utils/form';
import { Form, Select, Tag } from 'antd';
import type { SelectProps } from 'antd';
import { Rule } from 'antd/es/form';
import { FormItemLayout } from 'antd/es/form/Form';
import classNames from 'classnames';
import './index.scss';

type Props = SelectProps & {
  options: Array<SelectOption>;
  label: string;
  name: string;
  required?: boolean;
  rules?: Array<Rule>;
  layout?: FormItemLayout;
  wrapperClassName?: string;
};

const { Option } = Select;

type TagRender = SelectProps['tagRender'];

const tagRender: TagRender = (props) => {
  const { label, closable, onClose } = props;
  const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <Tag
      color={'rgb(255 0 0 / 30%)'}
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{ marginInlineEnd: 4, color: '#324054' }}
    >
      {label}
    </Tag>
  );
};

const AppleSelect = (props: Props) => {
  const { className, options, label, name, required, rules, layout = 'vertical', wrapperClassName } = props;

  return (
    <div className={classNames('app-select w-full', wrapperClassName)}>
      <Form.Item
        {...getFormItemLayout(layout)}
        required={required}
        name={name}
        label={label}
        rules={rules}
        layout={layout}
        validateTrigger={validateTrigger}
      >
        <Select
          {...props}
          maxTagCount='responsive'
          tagRender={tagRender}
          size='large'
          showSearch
          optionFilterProp='label'
          className={className}
        >
          {options.map((i) => (
            <Option key={i.value} value={i.value} disabled={i.disabled}>
              {i.label}
            </Option>
          ))}
        </Select>
      </Form.Item>
    </div>
  );
};

export default AppleSelect;
