const { getTargetSQL } = require('../../sql/config/target');

exports.getAllObject = async () => {
  const targetSQL = await getTargetSQL();
  const result = await targetSQL.query`EXEC SCSP_GET_ALL_OBJECT`;
  return result.recordset;
};

exports.getAllTableName = async () => {
  const targetSQL = await getTargetSQL();
  const result = await targetSQL.query`EXEC SCSP_GET_ALL_TABLE_NAME`;
  return result.recordset;
};

exports.getTableDetail = async (table_name) => {
  console.log('table_name:', table_name);
  const targetSQL = await getTargetSQL();
  const result =
    await targetSQL.query`EXEC SCSP_GET_TABLE_DETAIL @table_name=${table_name}`;
  return result.recordset;
};
