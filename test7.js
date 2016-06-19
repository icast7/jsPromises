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

readMyFile('test.txt')
.then( text => {
    console.log(text);
    return readMyFile(text);
})
.then(result => {
    console.log('final then', result);
})
.catch (err => {
    console.log(err);
});