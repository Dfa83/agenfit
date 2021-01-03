const AWS = require("aws-sdk");
const DynamoDB = new AWS.DynamoDB.DocumentClient();

module.exports.retrieveuuid = (event, context, callback) => {
  var params = {
      TableName: 'agenfit',
      KeyConditionExpression: 'WodUuid = :woduuid',
      ExpressionAttributeValues: {
        ':woduuid': event.pathParameters.woduuid
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