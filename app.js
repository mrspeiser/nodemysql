var express = require('express');
var app = express();
var mysql = require('mysql');

//connect to mysql db
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'section7'
});

//check connection
connection.connect(function(error) {
  if(error){
    console.log('error');
  } else {
    console.log('connected');
  }
});

//THIS IS A MIDDLEWARE TO SERVE THE INDEX PAGE
app.use(express.static(__dirname + '/public'));


//SELECT ALL FROM names TABLE & console.log ALL ROWS
connection.query("SELECT * FROM names", function(err, rows, fields){
  if(err){
    console.log("err")
  } else {
    console.log('successful');
  }
  rows.forEach(function(result){
    console.log(result.firstname, result.lastname)
  });
});

// INSERT INTO NAMES TABLE
connection.query(
  "INSERT INTO names(firstname, lastname) VALUES ('bob', 'sagat')", function(err, result){
  if(err){
    console.log('err')
  } else {
    console.log('inserted data');
  }
});

//SELECT FROM names TABLE & SAVE TO OBJ
connection.query( "SELECT * FROM names", function(err, result){
    if(err){
      console.log('data could not be loaded')
    } else {
      console.log('success');
      obj = {print: result};
    }

app.get('/', function(req, res){

    });
});



app.listen(4000);
