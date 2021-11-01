import { Router } from 'express';
import usersRouter from './users.routes';
import appointmentsRouter from './appointments.routes';
import SessionsRouter from './sessions.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', SessionsRouter);

export default routes;
