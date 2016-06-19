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


const promise1 = readMyFile('test.txt');

const promise2 = promise1.then(text => {
//readMyFile('package.json1').then(text => {
    console.log('\npromise1:\n', text);
    return text.toUpperCase();
});

promise2.then( result =>{
    console.log('\npromise2:\n', result);
});