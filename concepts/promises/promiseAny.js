function promiseAny(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises))
      return reject(new TypeError("Argument must be an array"));
    if (!promises.length) resolve([]);

    let count = 0;
    let errors = [];

    function handlePromises(index, promise) {
      promise.then(resolve).catch((error) => {
        count++;
        errors[index] = error;
        if (count === promises.length) {
          reject(new AggregateError(errors, "All promises were rejected"));
        }
      });
    }

    for (let i = 0; i < promises.length; ++i) {
      handlePromises(i, promises[i]);
    }
  });
}

module.exports = promiseAny;
