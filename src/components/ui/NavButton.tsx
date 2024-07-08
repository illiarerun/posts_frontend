import { Button, ButtonProps } from 'antd';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

interface Props extends ButtonProps {
  to: string;
}

export const NavButton: FC<Props> = ({ to, ...restProps }) => {
  return (
    <NavLink to={to}>
      <Button type="primary" size="large" {...restProps} />
    </NavLink>
  );
};
