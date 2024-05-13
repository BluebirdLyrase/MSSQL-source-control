const model = require('./model');
const _ = require('lodash');
const service = require('./service');

exports.generate = async () => {
  service.initFolder();
  await generateAllObject();
  await generateAllTable();
};

const generateAllObject = async () => {
  const data = await model.getAllObject();
  const groupedTypeList = _.groupBy(data, 'type_desc');
  const groupedNameList = _.mapValues(groupedTypeList, (values) =>
    _.groupBy(values, 'name')
  );

  for (const objectType of Object.keys(groupedNameList)) {
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

const generateAllTable = async () => {
  const tableNameList = await model.getAllTableName();
  for (const tableName of tableNameList.map((e) => e.table_name)) {
    const contentList = await model.getTableDetail(tableName);
    service.createFile(
      tableName,
      'TABLE',
      contentList.map((e) => e.line).join('\n')
    );
  }
};
