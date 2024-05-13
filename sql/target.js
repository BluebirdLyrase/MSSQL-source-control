const sql = require('mssql');
const sqlConfig = {
  //   user: process.env.DB_USER,
  //   password: process.env.DB_PWD,
  //   database: process.env.DB_NAME,
  user: 'sc',
  password: 'sc1234',
  database: 'source_control',
  server: 'localhost',
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
};

const getTargetSQL = async () => {
  try {
    // make sure that any items are correctly URL encoded in the connection string
    await sql.connect(sqlConfig);
    return sql;
  } catch (err) {
    console.error('err:', err);
    // ... error checks
  }
};

exports.getTargetSQL = getTargetSQL;

exports.testTargetSQL = async () => {
  try {
    const targetSQL = await getTargetSQL();
    const result = await targetSQL.query`select 1+1`;
    console.info('###DATABASE CONNECTION SUCCESSFUL###');
    return sql;
  } catch (err) {
    console.error(err);
    // ... error checks
  }
};
