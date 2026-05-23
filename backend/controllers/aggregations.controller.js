import UserData from '../model/db.model.js'; 

export const aggregationController = async (req, res) => { 
    try { 
        // here we are performing aggregations 
        const exampleAggregation = await UserData.aggregate([ 
            { 
                $match: { profession: /Engineer/}
            }, 
            { 
                $count: 'numEngineers'
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

