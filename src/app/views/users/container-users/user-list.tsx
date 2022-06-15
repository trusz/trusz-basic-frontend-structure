import React from 'react';
import styled from 'styled-components';
import { User } from '../../../../user/user';
import { UserCard } from './user-card';

interface Props {
  users: User[];
}

export function UserList(props: Props): React.ReactElement {
  const { users } = props;

  return (
    <UL>
      {users.map((user) => {
        return (
          <li>
            <UserCard name={user.name} username={user.username} />
          </li>
        );
      })}
    </UL>
  );
}

const UL = styled.ul`
  list-style: none;
`;
