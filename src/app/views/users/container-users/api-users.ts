import { User } from '../../../../user';

export type API = {
  fetchUsers(): Promise<User[]>;
};
