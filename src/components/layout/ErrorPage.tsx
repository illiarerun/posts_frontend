import { BaseLayout } from './BaseLayout/BaseLayout';
import { Col, Flex, Row, Typography } from 'antd';
import { NavButton } from '../ui/NavButton';

export const ErrorPage = () => (
  <BaseLayout>
    <Row justify={'center'} gutter={[0, 16]}>
      <Col span={24}>
        <Flex justify="center">
          <Typography.Title>Oops!</Typography.Title>
        </Flex>
      </Col>
      <Col span={24}>
        <Flex justify="center">
          <p>Sorry, an unexpected error has occurred.</p>
        </Flex>
      </Col>
      <Col span={24}>
        <Flex justify="center">
          <NavButton to="/">Return to home page</NavButton>
        </Flex>
      </Col>
    </Row>
  </BaseLayout>
);
