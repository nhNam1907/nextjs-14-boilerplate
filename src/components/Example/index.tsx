'use client';
import { Form, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import AppButton from '../AppButton';
import AppDatePicker from '../AppDatePicker';
import AppDateRangePicker from '../AppDateRangePicker';
import AppInput from '../AppInput';
import AppMultipleSelect from '../AppMultipleSelect';
import AppRadio from '../AppRadio';
import AppleSelect from '../AppSelect';

function Example() {
  const { t } = useTranslation();
  const [form] = Form.useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className='w-full'>
      {t('common:navLink.about')}
      {/* <AppLoading /> */}
      <Form form={form} layout='vertical' onFinish={onSubmit}>
        <Row className='w-full'>
          <AppMultipleSelect
            label='gender'
            options={[
              { label: 'nam', value: 'nam' },
              { label: 'nữ', value: 'nữ' },
            ]}
            name='gender'
            rules={[{ required: true, message: 'required' }]}
            placeholder='gender'
          />
        </Row>
        <Row>
          <AppleSelect
            name='subject'
            label='subject'
            options={[
              { label: 'Toán', value: 'math' },
              { label: 'Văn', value: 'literature' },
            ]}
            optionFilterProp='label'
            placeholder='subject'
            rules={[{ required: true, message: 'required' }]}
          />
        </Row>

        <AppInput name='name' label='name' placeholder='Name' rules={[{ required: true, message: 'required' }]} />

        <AppDatePicker name='date' label='date' placeholder='date' rules={[{ required: true, message: 'required' }]} />

        <AppDateRangePicker
          name='rangePicker'
          label='rangePicker'
          placeholder={['rangePicker', 'rangePicker']}
          rules={[{ required: true, message: 'required' }]}
        />

        <AppRadio
          name='checkbox'
          label='checkbox'
          options={[
            { label: 'Toán', value: 'math' },
            { label: 'Văn', value: 'literature' },
          ]}
          rules={[{ required: true, message: 'required' }]}
        />
        <AppButton htmlType='submit'>Submit</AppButton>
      </Form>
    </div>
  );
}

export default Example;
