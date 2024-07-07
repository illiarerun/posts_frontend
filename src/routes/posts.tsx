import { useEffect, useState } from 'react';
import { Post } from '../types/Post';
import { getAllPosts } from '../api/posts';
import { PostsList } from '../components/posts/PostsList';

export const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);

      try {
        const posts = await getAllPosts();

        setPosts(posts);
      } catch (e) {
        setError((e as Error).message);
      }

      setLoading(false);
    };

    if (!error && !loading) {
      loadData();
    }
  }, [error]);

  return <PostsList posts={posts} />;
};
