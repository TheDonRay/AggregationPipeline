import {mongoose} from 'mongoose'; 

const userDataSchema = new mongoose.Schema([ 
    { 
        name: { 
            type: String, 
        }, 
        email: { 
            type: String, 
            required: true, 
        }, 
        age: { 
            type: Number
        }, 
        profession: { 
            type: String, 
        }, 
        isActive: { 
            type: boolean
        }, 
        martialStatus: { 
            type: String,
        }
    }, 
    {
        timestamps: true
    }
]); 

const UserData = mongoose.model('UserData', userDataSchema); 
export default userDataSchema; 
