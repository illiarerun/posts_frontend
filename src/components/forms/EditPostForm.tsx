import { useEditPost } from '../../api/mutations';
import { useOpenNotification } from '../../contexts/NotificationContext';
import { Post, PostFields } from '../../types/Post';
import { Form } from 'antd';
import { FC, useCallback, useMemo } from 'react';
import { PostForm } from './PostForm';
import * as _ from 'lodash';
import { AxiosError } from 'axios';

interface Props {
  post: Post;
}

export const EditPostForm: FC<Props> = ({ post }) => {
  const { mutate } = useEditPost();
  const openNotification = useOpenNotification();

  const [form] = Form.useForm();

  const handleReset = () => {
    form.setFieldsValue({
      title: '',
      body: '',
    });
  };

  const initialValues = useMemo(() => _.pick(post, ['title', 'body']), [post]);

  const handleFinish = useCallback(
    (values: PostFields) => {
      if (_.isEqual(values, initialValues)) {
        openNotification({
          message: 'Nothing to update',
          type: 'info',
        });

        return;
      }

      mutate(
        {
          id: post.id,
          newPostFields: values,
        },
        {
          onError: (error) => {
            const { title, body } = (
              (error as AxiosError).response?.data as { errors: PostFields }
            ).errors;

            const description = `Error details: ${title ? `title: ${title}` : ''}, ${body ? `body: ${body}` : ''}`;

            openNotification({
              message: `Error while updating post`,
              type: 'error',
              description: description,
            });
          },
          onSuccess(data) {
            if (data.id) {
              openNotification({
                message: 'Post updated!',
                type: 'info',
                description: `Post with id ${data.id} has been succesfully updated!`,
              });
            }
          },
        }
      );
    },
    [mutate, openNotification, post, initialValues]
  );

  return (
    <PostForm
      onFinish={handleFinish}
      onReset={handleReset}
      form={form}
      submitText="Update"
      initialValues={initialValues}
    />
  );
};
