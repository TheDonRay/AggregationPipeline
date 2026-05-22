import express from 'express'; 
const getUserData = express.Router(); 
import { alluserData } from '../controllers/userData.controller.js'; 

getUserData.get('/users', alluserData); 

export default getUserData; 