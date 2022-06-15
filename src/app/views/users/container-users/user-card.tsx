import React from 'react';

interface Props {
  name: string;
  username: string;
}

export function UserCard(props: Props): React.ReactElement {
  const { name, username } = props;

  return (
    <section>
      <aside>
        <h3>{name}</h3>
        <p>{username}</p>
        <p>
          <small>*with small content</small>
        </p>
      </aside>
    </section>
  );
}
