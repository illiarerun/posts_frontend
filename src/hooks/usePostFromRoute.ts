import { useNavigate, useParams } from 'react-router-dom';
import { useOpenNotification } from '../contexts/NotificationContext';
import { useGetPost } from '../api/queries';

export const usePostFromRoute = () => {
  const { id } = useParams();
  const openNotification = useOpenNotification();
  const navigate = useNavigate();

  if (!id) {
    openNotification({
      type: 'error',
      message: 'ID not found',
      description: `Please provide "id" in url, example: /path/56`,
    });

    navigate('/');
  }

  const { data, isLoading, error } = useGetPost(Number(id));

  if (error) {
    openNotification({
      type: 'error',
      message: `Post with id:${id} not found!`,
      description: `Details: ${(error as Error).message}`,
    });

    navigate('/');
  }

  return { data, isLoading };
};
