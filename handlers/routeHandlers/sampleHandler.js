/*
* Title : sample handler
* Description : Rest api
* Author : Jerald Tonmoy Dias
*/

// module scaffolding 

const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
  console.log(requestProperties);
  callback(200, {
    "message": "this is sample url"
  });
}

module.exports = handler;