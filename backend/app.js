import express from 'express'; 
const app = express(); 

app.use(express.json()); // for middleware 
 
//import routes 


app.get('/projectspecs', (req, res) => { 
    res.json({ 
        Specs: "This project is designed to help me understand what aggregation pipelines are and how we can use them for AI analysis and dashboard representation", 
        Author: "Rayat Chowdhury", 
        Date: '5/20/2026'
    }); 
});  

export default app; 