const express = require('express');
const app = express();
const PORT = 8080;
const Auth = require ('./router/auth');
const Posts = require('./router/posts');
const mongo = require('mongoose');
const dotEnv = require('dotenv');
dotEnv.config();


//Connect DB
mongo.connect( process.env.MONGODAB_URL ,
  () => { console.log('DataBAse Connect Succerfully')});

// middleware
app.use(express.json());

//Auth middleware
app.use('/api/user', Auth);
app.use('/api/posts', Posts);

//Server Connection
app.listen(process.env.PORT , () => console.log(`Server Running on ${process.env.PORT}`));