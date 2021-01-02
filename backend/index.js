const AWS = require("aws-sdk");
const DynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
    // TODO implement
const params = {
    TableName: "agenfit",
    Item: {
        "WodId" : "wod_" + Math.random(),
        "Date": event.Date,
        "Type": event.Type,
        "Timecap": event.Timecap,
        "WOD": event.WOD,
        "Score" : event.Score
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
