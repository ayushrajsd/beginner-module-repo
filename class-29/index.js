Promise.myRace = function (promises) {
    return new Promise((resolve, reject) => {
        if (promises.length === 0) {
            throw new TypeError('Cannot perform Promise.race on an empty array');
        }

        promises.forEach(promise => {
            Promise.resolve(promise).then(resolve).catch(reject);
        });
    });
};