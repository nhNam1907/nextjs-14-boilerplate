import { getFormItemLayout, validateTrigger } from '@/utils/form';
import { DatePicker, GetProps } from 'antd';
import Form, { Rule } from 'antd/es/form';
import { FormItemLayout } from 'antd/es/form/Form';
import classNames from 'classnames';
import './index.scss';

type RangePickerProps = GetProps<typeof DatePicker.RangePicker>;

const { RangePicker } = DatePicker;

type Props = RangePickerProps & {
  label: string;
  name: string;
  required?: boolean;
  rules?: Array<Rule>;
  layout?: FormItemLayout;
  wrapperClassName?: string;
};

function AppDateRangePicker(props: Props) {
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
        <RangePicker {...props} size='large' />
      </Form.Item>
    </div>
  );
}

export default AppDateRangePicker;
