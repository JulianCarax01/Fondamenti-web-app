const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const session = require('express-session');

app.use(express.static('/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Configuriamo il middleware
app.use(
    session({
      secret: 'il-tuo-segreto',
      resave: false,
      saveUninitialized: false
    })
);

//Connettiamoci al db
mongoose.connect("mongodb+srv://BlackRaffo70:Alessandro2001@cluster0.zt6ollt.mongodb.net/?retryWrites=true&w=majority/Cluster0");
//
const db = mongoose.connection;
db.once("open", () => {
  console.log("Connesso al DB");
  app.listen(3000, () => {
    console.log("App in ascolto");
  });
});

//Colleghiamoci al router
const router = require('./routes/api');

//Creiamo il collegamento a index quando utilizziamo localhost:3000/
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'login.html'));
});

app.use('/api', router);
