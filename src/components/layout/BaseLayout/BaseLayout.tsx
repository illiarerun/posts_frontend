import { ConfigProvider, Layout } from 'antd';
import { themeConfig } from '../../../themeConfig';
import { Header } from '../Header';
import { Content } from 'antd/es/layout/layout';
import { FC, PropsWithChildren } from 'react';
import './BaseLayout.css';

export const BaseLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ConfigProvider theme={themeConfig}>
      <Layout>
        <Header />
        <Content>
          <div className="content">{children}</div>
        </Content>
      </Layout>
    </ConfigProvider>
  );
};
