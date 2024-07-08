import { Form } from 'antd';
import { useCreatePost } from '../../api/mutations';
import { PostForm } from './PostForm';
import { PostFields } from '../../types/Post';
import { useNavigate } from 'react-router-dom';
import { useOpenNotification } from '../../contexts/NotificationContext';

export const CreatePostForm = () => {
  const { mutate } = useCreatePost();
  const openNotification = useOpenNotification();
  const navigate = useNavigate();

  const [form] = Form.useForm();

  const handleReset = () => {
    form.resetFields();
  };

  const handleFinish = (values: PostFields) => {
    mutate(values, {
      onError: (error) => {
        openNotification({
          message: 'Error',
          type: 'error',
          description: (error as Error).message,
        });
      },
      onSuccess(data) {
        if (data.id) {
          openNotification({
            message: 'Post created!',
            type: 'info',
            description: `Post with title ${data.title} has been succesfully created!`,
          });

          navigate('/');
        }
      },
    });
  };

  return <PostForm onFinish={handleFinish} onReset={handleReset} form={form} />;
};
