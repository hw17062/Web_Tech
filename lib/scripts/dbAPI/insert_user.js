// this will insert the User into the disk-database

module.exports = function getUser (req){
  const sqlite3 = require('sqlite3').verbose();
  const path = require('path');
  const fs = require('fs');

  var randomstring = require("randomstring"); //used to create config file

  // set up the disk database
  let db = new sqlite3.Database(path.join(__dirname,'../../../userStore/db.sqlite'), (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('inserting new user info.');
  });


  let sql = `INSERT INTO user(Name, Email, configFile)
            VALUES(?, ?, ?)`;



  let name = req.session.username;
  let email =req.session.email;

  let configFile = randomstring.generate(10);
  req.session.configFile = configFile;

  fs.writeFile(path.join(__dirname,'../../../userStore/userSettings/', configFile + '.config'), 'null', function (err) {
    if (err) throw err;
    req.session.config = 'null';
  });


  db.run(sql, [name, email, configFile], (err) => {
    if (err) {
      return console.error(err.message, "when trying to insert new user");
    }
    console.log(`adding new user: ${name} to disk`)
  }

  );
}
