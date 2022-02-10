import { uuid } from 'uuidv4';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import IFindAllProviderDTO from '@modules/users/dtos/IFindAllProviderDTO';

import User from '@modules/users/infra/typeorm/entities/Users';

class UsersRepository implements IUsersRepository {
  private users: User[] = [];

  public async findById(id: string): Promise<User | undefined> {
    const FindUser = this.users.find(user => user.id === id);

    return FindUser;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const FinfUser = this.users.find(user => user.email === email);

    return FinfUser;
  }

  public async findAllProviders({
    expect_user_id,
  }: IFindAllProviderDTO): Promise<User[]> {
    let { users } = this;

    if (expect_user_id) {
      users = this.users.filter(user => user.id !== expect_user_id);
    }

    return users;
  }

  public async create(userData: ICreateUserDTO): Promise<User> {
    const user = new User();

    Object.assign(user, { id: uuid() }, userData);

    this.users.push(user);

    return user;
  }

  public async save(user: User): Promise<User> {
    const findIndex = this.users.findIndex(findUser => findUser.id === user.id);

    this.users[findIndex] = user;

    return user;
  }
}

export default UsersRepository;
