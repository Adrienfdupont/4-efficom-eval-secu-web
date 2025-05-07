const fs = require('fs');
let LOG_FILE = './log/res.log';

const logres = (req, res, next) => {
    let logString = [(new Date()).toLocaleString()];
    logString.push(req.method);
    logString.push(req.path);
    logString.push(req.ip);
    logString.push("\n Content-Type:", req.headers["content-type"]);
    fs.appendFileSync(LOG_FILE, logString.join(" ") + "\n");
    next();
}

module.exports = logres;
