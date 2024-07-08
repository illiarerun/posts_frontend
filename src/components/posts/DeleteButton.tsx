import { FC } from 'react';
import { Button, Popconfirm } from 'antd';
import { useDeletePost } from '../../api/mutations';
import { useOpenNotification } from '../../contexts/NotificationContext';
import { useQueryClient } from 'react-query';

interface Props {
  id: number;
  onSuccess?: () => void;
}

export const DeleteButton: FC<Props> = ({ id, onSuccess }) => {
  const { mutate } = useDeletePost();
  const openNotification = useOpenNotification();
  const queryClient = useQueryClient();

  const handleConfirm = () => {
    mutate(id, {
      onSuccess(data) {
        if (data) {
          openNotification({
            type: 'success',
            message: `Post with id:${id} was deleted!`,
          });

          queryClient.refetchQueries(['posts']);

          onSuccess?.();
        } else {
          openNotification({
            type: 'error',
            description: `Couldn't delete the post due to unknown error!`,
            message: `Error during deletion`,
          });
        }
      },
      onError(error) {
        openNotification({
          message: 'Error during deletion',
          type: 'error',
          description: (error as Error).message,
        });
      },
    });
  };

  return (
    <Popconfirm
      title="Delete the post"
      description="Are you sure to delete this post?"
      onConfirm={handleConfirm}
      okText="Yes"
      cancelText="No"
    >
      <Button type="default" size="middle" danger>
        Delete
      </Button>
    </Popconfirm>
  );
};
