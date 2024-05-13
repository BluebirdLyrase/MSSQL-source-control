const { getTargetSQL } = require('../../sql/config/target');

exports.getAllObject = async () => {
  const targetSQL = await getTargetSQL();
  const result = await targetSQL.query`EXEC SCSP_GET_ALL_OBJECT`;
  return result.recordset;
};
