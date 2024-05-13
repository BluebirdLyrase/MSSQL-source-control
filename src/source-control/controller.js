const model = require('./model');
const _ = require('lodash');
const service = require('./service');

exports.generateAllObject = async () => {
  service.initFolder();
  const data = await model.getAllObject();
  const groupedTypeList = _.groupBy(data, 'type_desc');
  const groupedNameList = _.mapValues(groupedTypeList, (values) =>
    _.groupBy(values, 'name')
  );

  for (const objectType of Object.keys(groupedNameList)) {
    // await service.createFolder(objectType);
    for (const objectName of Object.keys(groupedNameList[objectType])) {
      const fileName = groupedNameList[objectType][objectName][0].name;
      const folderName = objectType;
      const content = groupedNameList[objectType][objectName]
        .map((e) => e.line)
        .join('');
      service.createFile(fileName, folderName, content);
    }
  }
};
