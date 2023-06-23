const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');

const filePath = 'data.json';
const date = moment().add(1,'d').format('YYYY-MM-DD HH:mm:ss');

const data = {
    date: date,
};

jsonfile.writeFile(filePath, data, { spaces: 2 }, (err) => {
    if (err) {
        console.error('Error writing JSON file:', err);
    } else {
        console.log('Data written to JSON file successfully.');
    }
});

simpleGit().add(filePath).commit(date, { '--date': date }).push();