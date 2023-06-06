const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const session = require('express-session');

app.use(express.static('/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
    session({
      secret: 'il-tuo-segreto',
      resave: false,
      saveUninitialized: false
    })
);
mongoose.connect("mongodb+srv://BlackRaffo70:Alessandro2001@cluster0.zt6ollt.mongodb.net/?retryWrites=true&w=majority/Cluster0");

const db = mongoose.connection;
db.once("open", () => {
  console.log("Connesso al DB");
  app.listen(3000, () => {
    console.log("App in ascolto");
  });
});

const router = require('./routes/api');

app.get('/', function(req, res) {
  const filePath = path.join(__dirname, 'login.html');
  res.sendFile(filePath);
});

app.use('/api', router);
