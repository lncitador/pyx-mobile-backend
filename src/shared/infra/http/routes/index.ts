import { Router } from 'express';

import carrierRouter from '@modules/carrier/infra/http/routes/carrier.routes';
import vehicleRouter from '@modules/vehicle/infra/http/routes/vehicle.routes';
import surveyRouter from '@modules/survey/infra/http/routes/survey.routes';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const routes = Router();

// routes.use(ensureAuthenticated);

routes.use('/carrier', ensureAuthenticated, carrierRouter);
routes.use('/vehicle', ensureAuthenticated, vehicleRouter);
routes.use('/survey', ensureAuthenticated, surveyRouter);

export default routes;
