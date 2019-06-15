/*
db.transaction(function(txn) {
  txn.executeSql(
    query,                 //Query to execute as prepared statement
    argsToBePassed[],      //Argument to pass for the prepared statement
    function(tx, res) {}   //Callback function to handle the result response
  );
});
/**/
import { SQLite } from 'expo';

const db = SQLite.openDatabase('articles_db.db');

function initDb(){
  console.log("create table if not exist");
  db.transaction(tx => {
    tx.executeSql(
      'create table if not exists articles (id string primary key not null, article text);'/*,
      [],
      (_, message)=>console.log(message)/**/
    ); 
  });
}

function loadArticles(refreshArticles){
  db.transaction(
    tx => {
      tx.executeSql('select * from articles', [], (_, { rows }) =>{
          refreshArticles(rows);
        }
      );/** */
      /*tx.executeSql('select * from articles', [], (tx, rows ) =>{
        Callback(rows);
        }
      );/**/
    },
  );
}

function saveArticle(item, Callback){
  db.transaction( 
    tx => {
      tx.executeSql('insert into articles (id, article) values (?, ?)', 
        [item.id, JSON.stringify(item)],
        (_, message)=>Callback(item, true, message));
    }
  );
}

function deleteArticle(item, CallBack){
  db.transaction(
    tx => {
      tx.executeSql(`delete from articles where id = ?;`, [item.id],
      (_, { rows }) =>{
        CallBack(item, false, rows);});
    }
  );
}


export {
  initDb,
  loadArticles,
  saveArticle,
  deleteArticle
};