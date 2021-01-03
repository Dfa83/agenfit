const AWS = require("aws-sdk");
const DynamoDB = new AWS.DynamoDB.DocumentClient();

module.exports.submit = (event, context, callback) => {
    // TODO implement
const JSONobject = JSON.parse(event.body);

const params = {
    TableName: "agenfit",
    Item: {
        "WodId": context.awsRequestId,
        "WodDate": JSONobject.WodDate,
        "Type": JSONobject.Type,
        "Timecap": JSONobject.Timecap,
        "WOD": JSONobject.WOD,
        "Score" : JSONobject.Score
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

module.exports.retrieve = (event, context, callback) => {
    var params = {
        TableName: 'agenfit',
        IndexName: 'WodDate-index',
        KeyConditionExpression: 'WodDate = :woddate',
        ExpressionAttributeValues: {
          ':woddate': event.pathParameters.woddate
        }
    };

    console.log("params : " + params);

    DynamoDB.query(params, function(err, data) {
      if (err) {
        console.log(err);
        callback(err);
      }
      else {
        console.log(data);
        callback(null, data);
      }
    });
};