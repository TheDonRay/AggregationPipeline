import UserData from '../model/db.model.js'; 

export const averageAge = async (req, res) => {
    try {
        const avgAge = await UserData.aggregate([
            {
                $group: { _id: null, AverageAge: { $avg: "$age" } }
            }
        ]);
        res.status(200).json({ AggregationResult: avgAge });
    } catch (error) {
        console.error('There was an error with this aggregation', error);
        res.status(500).json({ Error: error });
    }
};

export const activeVsInactive = async (req, res) => {
    try {
        const comparison = await UserData.aggregate([
            {
                $group: { _id: "$isActive", count: { $sum: 1 } }
            }
        ]);
        res.status(200).json({ AggregationResult: comparison });
    } catch (error) {
        console.error('There was an error with this aggregation', error);
        res.status(500).json({ Error: error });
    }
};

export const groupByMaritalStatus = async (req, res) => {
    try {
        const groupMarital = await UserData.aggregate([
            {
                $group: { _id: "$maritalStatus", count: { $sum: 1 } }
            }
        ]);
        res.status(200).json({ AggregationResult: groupMarital });
    } catch (error) {
        console.error('There was an error with this aggregation', error);
        res.status(500).json({ Error: error });
    }
};

export const aggregationController = async (req, res) => {
    try { 
        // here we are performing aggregations 
        const exampleAggregation = await UserData.aggregate([ 
            { 
                $match: { profession: /Engineer/}
            }, 
            { 
                $count: 'number of Engineers'
            }
        ]);  
        return res.status(200).json({ 
            AggregationResult: exampleAggregation
        }); 
    } catch (error) { 
        console.error('There was an error with this aggregation', error); 
        res.status(500).json({ 
            Error: error 
        }); 
    }; 
}; 

