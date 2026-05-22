import {mongoose} from 'mongoose'; 
const URI = process.env.DBURI;  

const dbconnection = async () => { 
    try { 
        await mongoose.connection(URI);  
        console.log('Connection Successful'); 
    } catch (err0r) { 
        console.log('Error connecting to database', error); 
    }
}; 

export default dbconnection; 