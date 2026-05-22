import UserData from '../model/db.model.js';  

export const alluserData = async (req, res) => { 
    try {
        const getUsers = await UserData.find();
        res.json(getUsers); 
    } catch (error) { 
        console.log('Error getting user data',error); 
        res.json({ 
            error: error
        }); 
    }
};