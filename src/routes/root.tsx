import { Outlet } from 'react-router-dom';
import { BaseLayout } from '../components/layout/BaseLayout/BaseLayout';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export const Root = () => {
  return (
    <BaseLayout>
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    </BaseLayout>
  );
};
