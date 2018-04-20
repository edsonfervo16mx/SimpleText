/* */
var db = openDatabase('textdb', '1.0', 'SimpleText Database', 2 * 1024 * 1024);

function checkDB(){
    if (!db) {
      console.log('Error, la base de datos WebSQL no fue creada');
    }else{
      console.log(db.version);
      db.transaction(function (request) {
        request.executeSql('CREATE TABLE IF NOT EXISTS priority (name unique, link, status)');
        request.executeSql('INSERT INTO priority (name, link, status) VALUES (?,?,?)',['High','/high','active']);
        request.executeSql('INSERT INTO priority (name, link, status) VALUES (?,?,?)',['Medium','/medium','active']);
        request.executeSql('INSERT INTO priority (name, link, status) VALUES (?,?,?)',['Low','/low','active']);
        });
    }
}

checkDB();

/* */