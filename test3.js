function myAsyncFn() {
    var callback = null;

    setTimeout(() => {
        if(callback) callback();
    }, 1000);

    return {
        then(cb){
            callback = cb;
        }
    }
}

const fauxPromise = myAsyncFn();
fauxPromise.then(() =>  {
    console.log('all done');
});