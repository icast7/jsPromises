Promise.resolve('this is the text')
        .then(text => {
        console.log('promise1', text);
        return text.toUpperCase();
    })
.then(
    result => {
    console.log('promise2', result);
    return result.length;
    })
.then(
    x => {
    console.log('promise3', x);
    return (x * x);
})
.then(result => {
    console.log('final then', result);
});

