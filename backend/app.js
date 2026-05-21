import express from 'express'; 
const app = express(); 

app.use(express.json()); // for middleware 
 
//import routes 


app.get('/projectspecs', (req, res) => { 
    res.json({ 
        Specs: "Welcome to AGTPipeline. This project is designed to help me learn about aggregation pipeline and create a cool dashboard based of the pipeline"
    }); 
});  

export default app; 