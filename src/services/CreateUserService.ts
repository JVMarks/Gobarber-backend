import { hash } from 'bcryptjs';
import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';
import User from '../models/Users';

interface Request {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({ name, email, password }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const cheakUserExist = await usersRepository.findOne({
      where: { email },
    });

    const hashedPassword = await hash(password, 8);

    if (cheakUserExist) {
      throw new AppError('Email address already used.', 401);
    }

    const user = usersRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
