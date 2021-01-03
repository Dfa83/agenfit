const AWS = require("aws-sdk");
const DynamoDB = new AWS.DynamoDB.DocumentClient();

module.exports.delete = (event, context, callback) => {


//TODO : See later if the API must change (No more Date -> No more sort key. So DB must change also.)
const params = {
        TableName: 'agenfit',
        Key: {
            "WodUuid": event.pathParameters.woduuid,
            "WodDate": event.pathParameters.woddate,
        }
};

DynamoDB.delete(params, function (err, data) {
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