/*
* Title : not Found Handler
* Description : Rest api
* Author : Jerald Tonmoy Dias
*/

// module scaffolding 

const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
  callback(404, {
    "message": "rquest  not found"
  });
}

module.exports = handler;