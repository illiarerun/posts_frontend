import { Col, Flex, Row, Typography } from 'antd';
import { Header as AntdHeader } from 'antd/es/layout/layout';
import './Header.css';

export const Header = () => {
  return (
    <AntdHeader>
      <Row justify={'center'} align={'middle'} className="container">
        <Col span={20}>
          <Flex justify="center">
            <Typography.Title level={2}>Posts App</Typography.Title>
          </Flex>
        </Col>
      </Row>
    </AntdHeader>
  );
};
