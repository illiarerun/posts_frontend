import { useEffect, useState } from 'react';
import { Post } from '../types/Post';
import { getAllPosts } from '../api/posts';

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

  return 'Wow';
};
