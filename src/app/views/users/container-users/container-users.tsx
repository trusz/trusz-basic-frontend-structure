import React from 'react';
import { User } from '../../../../user';
import { API } from './api-users';
import { LayoutUsers } from './layout-users';
import { UserList } from './user-list';

interface Props {
  api: API;
}

export function ContainerUsers(props: Props): React.ReactElement {
  const { api } = props;

  const users = useUsers(api);
  const userList = <UserList users={users} />;

  return <LayoutUsers slotUserList={userList} />;
}

function useUsers(api: API): User[] {
  const [users, setUsers] = React.useState<User[]>([]);
  React.useEffect(() => {
    if (!api) {
      return;
    }
    api.fetchUsers().then(setUsers);
  }, [api]);
  return users;
}
