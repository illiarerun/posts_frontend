import { Outlet } from 'react-router-dom';
import { BaseLayout } from '../components/layout/BaseLayout/BaseLayout';
import { QueryClient, QueryClientProvider } from 'react-query';
import { NotificationContextProvider } from '../contexts/NotificationContext';

const queryClient = new QueryClient();

export const Root = () => {
  return (
    <NotificationContextProvider>
      <BaseLayout>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </BaseLayout>
    </NotificationContextProvider>
  );
};
