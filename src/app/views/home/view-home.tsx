import React from 'react';
import { Link } from 'react-router-dom';

interface Props {}

export function ViewHome(props: Props): React.ReactElement {
  return (
    <span>
      <h1>Entity Explorer</h1>
      <ul>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </span>
  );
}
