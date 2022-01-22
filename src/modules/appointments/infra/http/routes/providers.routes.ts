import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ProvidersController from '../controllers/ProvidersController';

const providerRoutes = Router();
const providersController = new ProvidersController();

providerRoutes.use(ensureAuthenticated);

providerRoutes.post('/', providersController.index);

export default providerRoutes;
