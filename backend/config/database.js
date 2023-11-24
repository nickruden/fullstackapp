import mysql from "mysql2";
  
// create the connection to database
const db = mysql.createConnection({
  host: 'bgof6x64lfwapxzdflwk-mysql.services.clever-cloud.com',
  user: 'ul6ecpxcc34drwo7',
  password: '79djLG1KeRpFRCcWGtpV',
  database: 'bgof6x64lfwapxzdflwk'
});
 
export default db;