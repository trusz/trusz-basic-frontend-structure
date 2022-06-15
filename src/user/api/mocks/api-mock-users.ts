import { User } from '../../user';

export class APIMockUsers {
  constructor() {}

  async fetchUsers(): Promise<User[]> {
    return [
      new User(1, 'User 1', 'user1'),
      new User(2, 'User 2', 'user2'),
      new User(3, 'User 3', 'user§'),
    ];
  }
}
