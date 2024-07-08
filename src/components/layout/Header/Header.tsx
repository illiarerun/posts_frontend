import { Col, Flex, Row, Typography } from 'antd';
import { Header as AntdHeader } from 'antd/es/layout/layout';
import './Header.css';
import { NavButton } from '../../ui/NavButton';

export const Header = () => {
  return (
    <AntdHeader>
      <Row justify={'center'} align={'middle'} className="container">
        <Col span={2}>
          <NavButton to={'/'} type="link">
            Home
          </NavButton>
        </Col>
        <Col span={20}>
          <Flex justify="center">
            <Typography.Title level={2}>Posts App</Typography.Title>
          </Flex>
        </Col>
        <Col span={2} />
      </Row>
    </AntdHeader>
  );
};
