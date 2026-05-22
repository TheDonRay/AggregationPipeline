import express from 'express'; 
const aggregationroute = express.Router(); 
import {aggregationController} from '../controllers/aggregations.controller.js'; 

aggregationroute.get('/dashboard', aggregationController); 

export default aggregationroute; 