var createCounter = function(init) {
    let currentCount = init;
    return {
        increment: () => ++currentCount,
        reset: () => currentCount = init,
        decrement: () => --currentCount
    };
};
// favorı sorum bu arada 