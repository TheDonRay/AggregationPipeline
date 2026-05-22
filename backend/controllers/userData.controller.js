import UserData from '../model/db.model.js';  

export const alluserData = async (req, res) => {
    const getUsers = await UserData.find();
    res.json(getUsers);
};