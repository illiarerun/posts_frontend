import Item, { Meta } from 'antd/es/list/Item';
import { FC } from 'react';
import { Post } from '../../types/Post';
import { NavButton } from '../ui/NavButton';
import { transformInsertedDate } from '../../helpers/date';
import { EditButton } from './EditButton';
import { DeleteButton } from './DeleteButton';

interface Props {
  post: Post;
}

export const PostItem: FC<Props> = ({ post }) => {
  const { id, title, inserted_at } = post;

  return (
    <Item
      key={id}
      actions={[
        <NavButton to={`view/${id}`} size="middle">
          Read
        </NavButton>,
        <EditButton id={id} />,
        <DeleteButton id={id} />,
      ]}
    >
      <Meta title={title} description={transformInsertedDate(inserted_at)} />
    </Item>
  );
};
