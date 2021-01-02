const AWS = require("aws-sdk");
const DynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
    // TODO implement
    const params = {
        TableName: "agenfit",
        Item: {
            "Timestamp": "2021-01-02",
            "Type": "AMRAP",
            "Timecap": 0,
            "WOD": [
                {
                    "exercice": "push-up",
                    "reps": 0
                }
                
            ],
            "Score" : "10 (RX)"
        }      
    };
    
    DynamoDB.put(params, function (err, data) {
        {
            if (err) {
                console.log(err);
                callback(err);
            }
            else {
                console.log(data);
                callback(null, data);
            }
        }
    });
};
