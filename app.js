var logger  = require('./logger');
const path =  require("path")
const os = require("os");

var pathObj = path.parse(__filename)
console.log("Path Object", pathObj )

var totalMemory = os.totalmem();
var freeMemory = os.freemem();


logger.log(`Total Memory: ${totalMemory}`)
logger.log(`Free Memory: ${freeMemory}`)

