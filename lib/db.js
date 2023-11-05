var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "tempdb.crhjr3mgkfeu.ap-northeast-2.rds.amazonaws.com",
  user: "root",
  password: "umc5throot",
  database: "tempdb",
});

connection.connect();

connection.query("SELECT * FROM member", function (error, results, fields) {
  if (error) {
    console.log(err);
  }
  console.log("Hi");
});

connection.end();
