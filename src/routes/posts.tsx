import { useEffect, useState } from 'react';
import { Post } from '../types/Post';
import { getAllPosts } from '../api/posts';
import { List } from 'antd';

export const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const loadData = async () => {
      if (error || loading) {
        return;
      }

      setLoading(true);

      try {
        const posts = await getAllPosts();

        setPosts(posts);
      } catch (e) {
        setError((e as Error).message);
      }

      setLoading(false);
    };

    loadData();
  }, []);

  console.log(posts);

  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        pageSize: 3,
      }}
      dataSource={posts}
      renderItem={(item) => (
        <List.Item key={item.id}>
          <List.Item.Meta
            title={item.title}
            description={
              item?.inserted_at
                ? new Date(item?.inserted_at).toDateString()
                : null
            }
          />
          {item.body}
        </List.Item>
      )}
    />
  );
};
