const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

const removeExisting = async (urls) => {
    try {
        let existingUrls = [];
        
        let data = await readFile('./urls.log', 'utf-8')
        existingUrls = data.split("\n");
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
    catch (err) {
        console.log('URL log file not found');
    }
    
}

module.exports = removeExisting;