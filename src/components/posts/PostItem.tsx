import Item, { Meta } from 'antd/es/list/Item';
import { FC } from 'react';
import { Post } from '../../types/Post';
import { NavButton } from '../ui/NavButton';

interface Props {
  post: Post;
}

export const PostItem: FC<Props> = ({ post }) => {
  const { id, title, inserted_at } = post;

  return (
    <Item
      key={id}
      actions={[
        <NavButton to={`edit/${id}`} type="default" size="middle">
          Edit
        </NavButton>,
      ]}
    >
      <Meta
        title={title}
        description={inserted_at ? new Date(inserted_at).toDateString() : null}
      />
    </Item>
  );
};
