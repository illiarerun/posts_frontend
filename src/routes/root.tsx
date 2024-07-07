import { ConfigProvider, Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/layout/Header/Header';
import { themeConfig } from '../themeConfig';

export const Root = () => {
  return (
    <ConfigProvider theme={themeConfig}>
      <Layout>
        <Header />
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};
