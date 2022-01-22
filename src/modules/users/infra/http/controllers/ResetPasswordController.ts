import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ResetPasswordServices from '@modules/users/services/ResetPasswordServices';

export default class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { password, token } = request.body;

    const resetPasswordServices = container.resolve(ResetPasswordServices);

    await resetPasswordServices.execute({
      password,
      token,
    });

    return response.status(204).json();
  }
}
