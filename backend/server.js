import 'dotenv/config';
import app from './app.js';

const PORT = process.env.PORT || 4567; 

//db connection here 
import dbconnection from './config/db.connection.js'; 
// import inserting seed data function here 
dbconnection(); 
//invoke both the db connection function and the inserting seed data function here 


app.listen(PORT, () => {
  console.log(`Server successfully running at http://localhost:${PORT}`);
});