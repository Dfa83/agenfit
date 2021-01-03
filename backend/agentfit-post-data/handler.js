const AWS = require("aws-sdk");
const DynamoDB = new AWS.DynamoDB.DocumentClient();

module.exports.submit = (event, context, callback) => {
    // TODO implement
const JSONobject = JSON.parse(event.body);

const params = {
    TableName: "agenfit",
    Item: {
        "WodUuid": context.awsRequestId,
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