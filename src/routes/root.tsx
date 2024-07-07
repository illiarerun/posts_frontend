import { Outlet } from 'react-router-dom';
import { BaseLayout } from '../components/layout/BaseLayout/BaseLayout';

export const Root = () => {
  return (
    <BaseLayout>
      <Outlet />
    </BaseLayout>
  );
};
