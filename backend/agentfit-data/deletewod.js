const AWS = require("aws-sdk");
const DynamoDB = new AWS.DynamoDB.DocumentClient();

module.exports.delete = (event, context, callback) => {

const params = {
        TableName: 'agenfit',
        Key: event.pathParameters.woduuid
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