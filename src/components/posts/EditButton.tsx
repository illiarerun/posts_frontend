import { FC } from 'react';
import { NavButton } from '../ui/NavButton';

interface Props {
  id: number;
}

export const EditButton: FC<Props> = ({ id }) => (
  <NavButton to={`edit/${id}`} type="default" size="middle">
    Edit
  </NavButton>
);
