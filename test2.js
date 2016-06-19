function myAsyncFn(callback) {
    setTimeout(() => {
        callback();
    }, 1000);
};

myAsyncFn(() => {
    console.log('all done!!!');
});