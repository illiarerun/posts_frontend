import { Flex, Spin } from 'antd';
import { FC } from 'react';

interface Props {
  loading?: boolean;
}

export const Loader: FC<Props> = ({ loading }) => {
  return (
    <Flex justify="center">
      <Spin spinning={loading} />
    </Flex>
  );
};
