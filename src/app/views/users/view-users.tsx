import React from 'react';
import { APIUser } from '../../../user/api/api-user';
import { ContainerUsers } from './container-users';

interface Props {}

export function ViewUsers(props: Props): React.ReactElement {
  const apiUser = new APIUser('https://jsonplaceholder.typicode.com');
  const api = {
    fetchUsers: () => apiUser.fetchUsers(),
  };

  return <ContainerUsers api={api} />;
}
