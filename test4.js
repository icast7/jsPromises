const fs = require('fs');

function readMyFile(fileName) {
    const promise = new Promise((resolve, reject) => {
            fs.readFile(fileName, 'utf-8', (err, text) => {
            if (err) reject (err);
            else resolve(text);
        });
    });
    return promise;
};

readMyFile('package.json').then(text => {
//readMyFile('package.json1').then(text => {
    console.log(text);
}, err => {
    console.error('MY ERROR', err);
});