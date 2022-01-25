import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ProvidersController from '../controllers/ProvidersController';
import ProviderDayAvaliabilityController from '../controllers/ProviderDayAvaliabilityController';
import ProviderMothAvaliabilityController from '../controllers/ProviderMothAvaliabilityController';

const providerRoutes = Router();
const providersController = new ProvidersController();
const providerDayAvaliabilityController =
  new ProviderDayAvaliabilityController();
const providerMothAvaliabilityController =
  new ProviderMothAvaliabilityController();

providerRoutes.use(ensureAuthenticated);

providerRoutes.post('/', providersController.index);
providerRoutes.get(
  '/:provider_id/month-availability',
  providerMothAvaliabilityController.index,
);
providerRoutes.get(
  '/:provider_id/day-availability',
  providerDayAvaliabilityController.index,
);

export default providerRoutes;
