import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListProviderMonthAvailabilityServices from '@modules/appointments/services/ListProviderMonthAvailabilityServices';

export default class ProviderMonthAvailabilityController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { provider_id } = request.params;
    const { month, year } = request.query;

    const ListProviderMonthAvailability = container.resolve(
      ListProviderMonthAvailabilityServices,
    );

    const availability = await ListProviderMonthAvailability.execute({
      provider_id,
      month: Number(month),
      year: Number(year),
    });

    return response.json(availability);
  }
}
