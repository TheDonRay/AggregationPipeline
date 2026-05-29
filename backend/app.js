import express from 'express';
import cors from 'cors';
const app = express();

app.use(cors({ origin: ['http://localhost:5173', 'http://localhost:5174'] }));
app.use(express.json());
 
//import routes 
import getUserData from './routes/userData.route.js'; 
import aggregationroute from './routes/aggregations.route.js'; 

// mount the route here as such 
app.use('/api/v1/', getUserData); 
app.use('/api/v1/', aggregationroute); 

app.get('/projectspecs', (req, res) => { 
    res.json({ 
        Specs: "This project is designed to help me understand what aggregation pipelines are and how we can use them for AI analysis and dashboard representation", 
        Author: "Rayat Chowdhury", 
        Date: '5/20/2026'
    }); 
});  

export default app; 