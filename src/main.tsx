import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root } from './routes/root';
import 'antd/dist/reset.css';
import { ErrorPage } from './components/layout/ErrorPage';
import { Posts } from './routes/posts';
import { CreatePost } from './routes/create';
import { EditPost } from './routes/edit';
import { PostPage } from './routes/post';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Posts />,
      },
      {
        path: '/create',
        element: <CreatePost />,
      },
      {
        path: '/edit/:id',
        element: <EditPost />,
      },
      {
        path: '/view/:id',
        element: <PostPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
