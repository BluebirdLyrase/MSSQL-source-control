const { testTargetSQL } = require('./sql/config/target');
const fs = require('fs');
// ERROR LOG MANAGEMENT
// =====================================================================
let errorLogStream = fs.createWriteStream(__dirname + '/logs/error.log', {
  flags: 'a',
});

// ERROR HANDLING
// =====================================================================
process.on('uncaughtException', (err) => {
  //TODO change to discord bot
  var date = new Date();
  console.error(`+++++++ ${date} error found, logging event +++++++`);
  console.error(err.stack);
  errorLogStream.write(`Date: ${date}. Err: ${err.stack}`);
  return;
});

testTargetSQL();
