import { ID } from '../x/types/id';

export class User {
  constructor(
    public readonly id: ID,
    public readonly name: string,
    public readonly username: string
  ) {}
}
