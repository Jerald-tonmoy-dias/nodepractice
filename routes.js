/*
* Title : Routes
* Description : Rest api
* Author : Jerald Tonmoy Dias
*/

// dependencies
const { sampleHandler } = require('./handlers/routeHandlers/sampleHandler');

const routes = {
  'sample': sampleHandler
}

module.exports = routes;