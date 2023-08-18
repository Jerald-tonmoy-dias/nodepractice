/*
* Title : Uptime monitoring application 
* Description : Rest api
* Author : Jerald Tonmoy Dias
*/

// dependencies
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');
// app object 

const app = {};

// config
app.config = {
  port: 3000
};

// create server 
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);


  server.listen(app.config.port, () => {
    console.log(`listening port : ${app.config.port}`);
  });
}

// handle request response 
app.handleReqRes = handleReqRes;

// start server
app.createServer()