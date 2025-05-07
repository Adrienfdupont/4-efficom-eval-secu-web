const fs = require('fs');
const LOG_FILE = './log/req.log';

const log = (req, res, next) => {
    let logString = [(new Date()).toLocaleString()];
    logString.push(req.method);
    logString.push(req.path);
    logString.push(req.ip);
    logString.push("\n Content-Type:", req.headers["content-type"]);
    if (req.body) {
        logString.push("\n ", JSON.stringify(req.body));
    }
    fs.appendFileSync(LOG_FILE,logString.join(" ") + "\n");
    next();
}

module.exports = log;
