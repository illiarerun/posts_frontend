import { Button, Form, FormProps, Input, Space } from 'antd';
import { PostFields } from '../../types/Post';
import './PostForm.css';
import { FC } from 'react';

type Props = FormProps & {
  onReset?: () => void;
  submitText?: string;
};

export const PostForm: FC<Props> = ({
  onFinish,
  onReset,
  form,
  submitText,
  initialValues,
}) => {
  return (
    <Form<PostFields>
      labelCol={{ span: 8 }}
      layout="vertical"
      onFinish={onFinish}
      form={form}
      autoComplete="off"
      className="form-container"
      initialValues={initialValues}
    >
      <Form.Item<PostFields>
        label="Title"
        name="title"
        tooltip="Title of post, should be between 3 and 100 characters"
        rules={[
          { required: true, message: 'Please enter title!' },
          { min: 3, message: 'Should have at least 3 characters' },
          { max: 100, message: 'Should have not more than 100 characters' },
        ]}
        wrapperCol={{ span: '100%' }}
      >
        <Input />
      </Form.Item>

      <Form.Item<PostFields>
        label="Content"
        name="body"
        tooltip="Main content of post"
        rules={[{ required: true, message: 'Please enter content!' }]}
      >
        <Input.TextArea rows={5} />
      </Form.Item>

      <Form.Item>
        <Space>
          <Button type="primary" htmlType="submit">
            {submitText || 'Submit'}
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};
