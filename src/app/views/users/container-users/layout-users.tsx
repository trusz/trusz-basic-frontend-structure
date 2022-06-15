import React from 'react';

interface Props {
  slotUserList: React.ReactNode;
}

export function LayoutUsers(props: Props): React.ReactElement {
  const { slotUserList } = props;

  return (
    <span>
      <h1>Users</h1>
      <span>{slotUserList}</span>
    </span>
  );
}
