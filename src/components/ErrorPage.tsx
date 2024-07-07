import { useNavigate } from 'react-router-dom';
import { BaseLayout } from './layout/BaseLayout/BaseLayout';
import { Button, Col, Flex, Row, Typography } from 'antd';

export const ErrorPage = () => {
  const navigate = useNavigate();

  const handleReturnToHome = () => {
    navigate('/');
  };

  return (
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
            <Button onClick={handleReturnToHome}>Return to home page</Button>
          </Flex>
        </Col>
      </Row>
    </BaseLayout>
  );
};
