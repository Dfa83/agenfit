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