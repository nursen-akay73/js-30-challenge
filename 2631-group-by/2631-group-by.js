Array.prototype.groupBy = function(fn) {
    // 'acc' biriken nesnemiz, 'item' ise o anki elemandır.
    return this.reduce((acc, item) => {
        const key = fn(item);
        if (!acc[key]) acc[key] = [];
        acc[key].push(item);
        return acc;
    }, {});
};