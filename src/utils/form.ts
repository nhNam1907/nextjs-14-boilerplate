import { FormItemLayout } from 'antd/es/form/Form';
import { FormLabelAlign } from 'antd/es/form/interface';

export const validateTrigger = ['onChange', 'onBlur'];

export const getFormItemLayout = (layout: FormItemLayout) => {
  return {
    labelCol: {
      span: layout === 'horizontal' ? 8 : 24,
    },
    wrapperCol: {
      span: layout === 'horizontal' ? 20 : 24,
    },
    labelAlign: 'left' as FormLabelAlign,
  };
};
