// This module exports as a function that will take a username and see if it is stored
// on the Disk

module.exports = function getUser (req){
  const sqlite3 = require('sqlite3').verbose();
  const path = require('path');

  // set up the disk database
  let db = new sqlite3.Database(path.join(__dirname,'../../../userStore/db.sqlite'), (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('getting user info.');
  });


  let sql = `SELECT *
            FROM user
            WHERE Name = ?`;

  let name = req.session.username;

  db.get(sql, [name], (err, row) => {
    if (err) {
    return console.error(err.message);
  }
    if (row){
      console.log(row.Name, row.Email, row.configFile);
      req.session.username = row.name;
      req.session.email = row.email;
      req.session.configFile = row.configFile;

      var fs = require('fs');

      fs.open(path.join(__dirname,'../../../userStore/userSettings/', row.configFile + '.config'), 'w', function (err, file) {
        if (err) throw err;
        req.session.config = file;

});
    }else{
      console.log(`No user found with the name ${name}`);
      var newUser = require('./insert_user')(req)
    }
  }

  );

  db.close();
}
