const fs = require('fs');

const addURL = (url) => {
    fs.appendFileSync('./urls.log', '\r\n' + url);
}

addURL("http://yahoo/com")

module.exports = addURL;