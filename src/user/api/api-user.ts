import { fetchGET } from '../../x/http';
import { User } from '../user';
import { ResponseUser } from './response-user';
import { urlUsers } from './url-users';

export class APIUser {
  constructor(public baseURL: string) {}

  async fetchUsers(): Promise<User[]> {
    const url = urlUsers(this.baseURL);
    const resp = await fetchGET<ResponseUser[]>(url);
    // TODO: validition needed
    const respUsers = resp.body;
    const users = respUsers.map(this.respToUser);
    return users;
  }

  private respToUser(respUser: ResponseUser): User {
    return new User(respUser.id, respUser.name, respUser.username);
  }
}
