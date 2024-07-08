export interface Post {
  id: number;
  title: string;
  body: string;
  inserted_at?: string;
  updated_at?: string;
}

export type PostFields = Pick<Post, 'title' | 'body'>;
