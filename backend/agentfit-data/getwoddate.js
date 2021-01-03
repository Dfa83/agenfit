const AWS = require("aws-sdk");
const DynamoDB = new AWS.DynamoDB.DocumentClient();


module.exports.retrievedate = (event, context, callback) => {
    var params = {
        TableName: 'agenfit',
        IndexName: 'WodDate-index',
        KeyConditionExpression: 'WodDate = :woddate',
        ExpressionAttributeValues: {
          ':woddate': event.pathParameters.woddate
        }
    };

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