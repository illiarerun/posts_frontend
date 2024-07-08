import { Card, Flex, Typography } from 'antd';
import { Post } from '../../../types/Post';
import { transformInsertedDate } from '../../../helpers/date';
import { FC } from 'react';
import './PostsContent.css';
import { EditButton } from '../EditButton';
import { DeleteButton } from '../DeleteButton';
import { useNavigate } from 'react-router-dom';

interface Props {
  post: Post;
}

export const PostContent: FC<Props> = ({ post }) => {
  const { id, title, body, inserted_at } = post;

  const navigate = useNavigate();

  const handleDeleteSuccess = () => {
    navigate('/');
  };

  return (
    <Card
      actions={[
        <EditButton id={id} />,
        <DeleteButton id={id} onSuccess={handleDeleteSuccess} />,
      ]}
      className="post-container"
    >
      <Flex vertical gap={16}>
        <Card.Meta
          title={title}
          description={transformInsertedDate(inserted_at)}
        />
        <Typography.Paragraph>{body}</Typography.Paragraph>
      </Flex>
    </Card>
  );
};
