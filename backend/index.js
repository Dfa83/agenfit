var AWS = require("aws-sdk");
var DynamoDB = new AWS.DynamoDB.DocumentClient();

var params = {
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

DynamoDB.put(params, function (err) {
    {
            if (err) console.log(err);
    }
});