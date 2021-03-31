const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

const removeExisting = (urls) => {
    let existingUrls = [];
    
    readFile('./src/urls.log', 'utf-8').then((data) => {
        existingUrls = data.split("\n");
    }).catch (err => {
        console.warn('No log file found')
    });

    if (existingUrls) {
        let existingIndex = [];
        urls.forEach((url, index) => {
            if (existingUrls.indexOf(url) > -1) {
                existingIndex.push(index);
            }
        });
        existingIndex.reverse().forEach((urlIndex) => {
            urls.splice(urlIndex, 1)
        });
    }
}

module.exports = removeExisting;