
const express = require('express');
const mysql = require('mysql2');
const app = express();

const dbConfig = {
  host: 'database',
  user: 'root',
  password: 'rootpassword',
  database: 'testdb'
};

function connectWithRetry() {
  const db = mysql.createConnection(dbConfig);

  db.connect(err => {
    if (err) {
      console.log("Database not ready, retrying in 5 seconds...");
      setTimeout(connectWithRetry, 5000);
    } else {
      console.log("Connected to MySQL");
    }
  });
}

connectWithRetry();

app.get('/', (req, res) => {
  res.send("Backend is running successfully!");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
