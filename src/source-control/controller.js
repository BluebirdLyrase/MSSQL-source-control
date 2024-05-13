const model = require('./model');

exports.generateAllObject = async () => {
  const allObjectResponse = await model.getAllObject();
};
