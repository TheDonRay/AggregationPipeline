import express from 'express';
const aggregationroute = express.Router();
import { aggregationController, averageAge, activeVsInactive, groupByMaritalStatus } from '../controllers/aggregations.controller.js';

aggregationroute.get('/numengineers', aggregationController);
aggregationroute.get('/avgage', averageAge);
aggregationroute.get('/activestatus', activeVsInactive);
aggregationroute.get('/maritalstatus', groupByMaritalStatus);

export default aggregationroute;