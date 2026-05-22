import 'dotenv/config';
import app from './app.js';

const PORT = process.env.PORT || 4567; 

//db connection here 
import dbconnection from './config/db.connection.js'; 
// import inserting seed data function here 
import { insertSeedData } from './services/dataexport.services.js'; 

//invoke both the db connection function and the inserting seed data function here 
dbconnection();  
insertSeedData();

app.listen(PORT, () => {
  console.log(`Server successfully running at http://localhost:${PORT}`);
});